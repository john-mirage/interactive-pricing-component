import styled from 'styled-components';
import { useButton } from '@react-aria/button';
import { RefObject, useRef } from 'react';
import { AriaButtonProps } from '@react-types/button';

interface ButtonProps {
    isPressed: boolean;
}

const Container = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 17rem;
    height: 4rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 9999px;
    background-color: ${props => props.isPressed ? props.theme.color.primary.darkCyan : props.theme.color.neutral.darkDesaturatedBlue};
    transition: background-color 150ms;
    cursor: pointer;

    &:focus {
        outline: 0.3rem solid ${props => props.theme.color.primary.paleBlue};
    }

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        order: 7;
        margin-right: 0;
    }
`;

const Label = styled.span`
    font-size: 1.2rem;
    font-weight: 800;
    color: ${props => props.theme.color.primary.paleBlue};
    transition: color 150ms;

    ${Container}:hover & {
        color: ${props => props.theme.color.neutral.white};
    }
`;

function Button(props: AriaButtonProps) {
    let buttonRef = useRef() as RefObject<HTMLButtonElement>;
    let { buttonProps, isPressed } = useButton({
        ...props,
        elementType: "button",   
    }, buttonRef);

    return (
        <Container isPressed={ isPressed } { ...buttonProps } ref={buttonRef}>
            <Label>Start my trial</Label>
        </Container>
    )
}

export default Button