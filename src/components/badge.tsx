import styled from 'styled-components';

const Container = styled.span`
    display: block;
    position: absolute;
    top: 50%;
    right: -0.4rem;
    transform: translate(100%, -50%);
    width: 4rem;
    height: 2rem;
    border-radius: 9999px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: ${props => props.theme.color.primary.badge};

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        right: -0.8rem;
        width: 8rem;
    }
`;

const Label = styled.span`
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 800;
    color: ${props => props.theme.color.primary.lightRed};
    text-align: center;
`;

const MobileLabel = styled(Label)`
    display: block;

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        display: none;
    }
`;

const DesktopLabel = styled(Label)`
    display: none;

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        display: block;
    }
`;

function Badge() {
    return (
        <Container>
            <MobileLabel>-25%</MobileLabel>
            <DesktopLabel>25% discount</DesktopLabel>
        </Container>
    )
}

export default Badge;