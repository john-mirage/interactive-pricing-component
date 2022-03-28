import styled from 'styled-components';

const Container = styled.span`
    position: absolute;
    top: 50%;
    right: -4.4rem;
    transform: translateY(-50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 2rem;
    border-radius: 9999px;
    background-color: ${props => props.theme.color.primary.badge};
`;

const Label = styled.span`
    font-size: 1rem;
    font-weight: 800;
    color: ${props => props.theme.color.primary.lightRed};
`;

function Badge() {
    return (
        <Container>
            <Label>-25%</Label>
        </Container>
    )
}

export default Badge;