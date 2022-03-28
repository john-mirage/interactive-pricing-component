import styled from 'styled-components';
import { useButton } from '@react-aria/button';
import { RefObject, useRef } from 'react';
import { AriaButtonProps } from '@react-types/button';

const Container = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 17rem;
    height: 4rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 9999px;
    background-color: ${props => props.theme.color.neutral.darkDesaturatedBlue};
`;

function Button(props: AriaButtonProps) {
    let buttonRef = useRef() as RefObject<HTMLButtonElement>;
    let { buttonProps } = useButton(props, buttonRef);
    let { children } = props;

    return (
        <Container { ...buttonProps } ref={buttonRef}>
            { children }
        </Container>
    )
}

export default Button