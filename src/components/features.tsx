import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 2.4rem;
`;

const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: auto;
    margin-bottom: 1.6rem;
`;

const Icon = styled.svg`
    width: 0.9rem;
    height: auto;
    margin-right: 1.6rem;
`;

const IconPath = styled.path`
    stroke: ${props => props.theme.color.primary.strongCyan};
`;

const Feature = styled.p`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

const features = [
    "Unlimited websites",
    "100% data ownership",
    "Email reports",
];

function Features() {
    return (
        <Container>
            {features.map(feature => (
                <Section>
                    <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 8">
                        <IconPath fill="none" stroke-width="2" d="M1 4.134l1.907 1.908L7.949 1"/>
                    </Icon>
                    <Feature>{ feature }</Feature>
                </Section>
            ))}
        </Container>
    )
}

export default Features