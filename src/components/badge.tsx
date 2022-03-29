import styled from 'styled-components';

const Container = styled.span`
    position: absolute;
    top: 50%;
    right: -0.4rem;
    transform: translate(100%, -50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 2rem;
    border-radius: 9999px;
    background-color: ${props => props.theme.color.primary.badge};

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        width: auto;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
    }
`;

const Label = styled.span`
    font-size: 1rem;
    font-weight: 800;
    color: ${props => props.theme.color.primary.lightRed};

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

const DesktopLabel = styled.span`
    display: none;

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        display: block;
        margin-left: 0.2rem;
    }
`;

function Badge() {
    return (
        <Container>
            <Label>
                -25%
                <DesktopLabel>discount</DesktopLabel>
            </Label>
        </Container>
    )
}

export default Badge;