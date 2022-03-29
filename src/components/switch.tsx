import { useSwitch } from '@react-aria/switch';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';
import { useFocusRing } from '@react-aria/focus';
import { useRef } from 'react';
import styled from 'styled-components';
import Badge from '@components/badge';

const Container = styled.label`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: auto;
`;

const Text = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

const Track = styled.span`
    display: block;
    width: 4.4rem;
    height: 2.2rem;
    padding: 0.4rem;
    border-radius: 9999px;
    background-color: ${props => props.isSelected ? props.theme.color.primary.softCyan : props.theme.color.neutral.lightGrayishBlue};
    margin-left: 0.8rem;
    margin-right: 0.8rem;
`;

const Dot = styled.span`
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 9999px;
    background-color: ${props => props.theme.color.neutral.white};
    transform: ${props => props.isSelected ? "translateX(2.2rem)" : "translateX(0)"};
    transition: transform 150ms;
`;

function Switch(props) {
    let state = useToggleState(props);
    let ref = useRef();
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
            <Text>Yearly Billing</Text>
            <Badge />
        </Container>
    );
}

export default Switch;