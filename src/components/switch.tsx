import { useSwitch } from '@react-aria/switch';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import { useFocusRing } from '@react-aria/focus';
import { RefObject, useRef } from 'react';
import styled from 'styled-components';
import Badge from '@components/badge';
import { AriaSwitchProps } from '@react-types/switch';

interface SwitchProps {
    isSelected: boolean;
}

const Container = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: auto;

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        flex-direction: row;
    }

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        width: 100%;
        order: 4;
        justify-content: center;
    }
`;

const Text = styled.span`
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

const TextWithBadge = styled(Text)`
    position: relative;
`;

const Track = styled.span<SwitchProps>`
    display: block;
    width: 4.4rem;
    height: 2.2rem;
    padding: 0.4rem;
    border-radius: 9999px;
    background-color: ${props => props.isSelected ? props.theme.color.primary.softCyan : props.theme.color.neutral.lightGrayishBlue};
    margin-top: 2rem;
    margin-bottom: 2rem;
    transform: rotate(90deg);
    cursor: pointer;

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0.8rem;
        margin-right: 0.8rem;
        transform: rotate(0);
    }

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        margin-left: 1.6rem;
        margin-right: 1.6rem;
    }
`;

const Dot = styled.span<SwitchProps>`
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 9999px;
    background-color: ${props => props.theme.color.neutral.white};
    transform: ${props => props.isSelected ? "translateX(2.2rem)" : "translateX(0)"};
    transition: transform 150ms;
`;

function Switch(props: AriaSwitchProps) {
    let state = useToggleState(props);
    let ref = useRef() as RefObject<HTMLInputElement>;
    let { inputProps } = useSwitch(props, state, ref);
    let { isFocusVisible, focusProps } = useFocusRing();

    return (
        <Container>
            <VisuallyHidden>
                <input {...inputProps} {...focusProps} ref={ref} />
            </VisuallyHidden>
            <Text>Monthly Billing</Text>
            <Track aria-hidden="true" isSelected={state.isSelected}>
                <Dot isSelected={state.isSelected} />
            </Track>
            <TextWithBadge>
                Yearly Billing
                <Badge />
            </TextWithBadge>
        </Container>
    );
}

export default Switch;