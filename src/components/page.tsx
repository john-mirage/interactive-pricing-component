import styled from 'styled-components';
import Hero from '@components/hero';
import Card from '@components/card';
import backgroundPattern from '@assets/images/bg-pattern.svg';

const Container = styled.main`
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding-top: 5.6rem;
    padding-bottom: 8.8rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    background-color: ${props => props.theme.color.neutral.white};
`;

const Pattern = styled.img`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    object-fit: cover;
`;

function Page() {
    return (
        <Container>
            <Hero />
            <Card />
            <Pattern src={backgroundPattern} alt="background pattern illustration" />
        </Container>
    )
}

export default Page;
