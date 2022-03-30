import { useSwitch } from '@react-aria/switch';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import { useFocusRing } from '@react-aria/focus';
import { RefObject, useRef } from 'react';
import styled, { css } from 'styled-components';
import { AriaSwitchProps } from '@react-types/switch';

interface TrackProps {
    isFocused: boolean;
    isSelected: boolean;
}

interface DotProps {
    isSelected: boolean;
}

const Container = styled.label`
    display: block;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 0.8rem;
        margin-right: 0.8rem;
    }

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        margin-left: 1.6rem;
        margin-right: 1.6rem;
    }
`;

const Track = styled.span<TrackProps>`
    display: block;
    width: 4.4rem;
    height: 2.2rem;
    padding: 0.4rem;
    border-radius: 9999px;
    background-color: ${props => props.isSelected ? props.theme.color.primary.strongCyan : props.theme.color.neutral.lightGrayishBlue};
    transform: rotate(90deg);
    transition: background-color 150ms;
    cursor: pointer;
    ${props => props.isFocused && css`
        outline: 0.2rem solid ${props.theme.color.neutral.darkDesaturatedBlue};
    `}

    &:hover {
        background-color: ${props => props.isSelected ? props.theme.color.primary.strongCyan : props.theme.color.primary.softCyan};
    }

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        transform: rotate(0);
    }
`;

const Dot = styled.span<DotProps>`
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
            <VisuallyHidden elementType="span">
                <input {...inputProps} {...focusProps} ref={ref} />
            </VisuallyHidden>
            <Track aria-hidden="true" isFocused={ isFocusVisible } isSelected={ state.isSelected }>
                <Dot isSelected={state.isSelected} />
            </Track>
        </Container>
    );
}

export default Switch;