import styled from 'styled-components';
import Hero from '@components/hero';
import Card from '@components/card';
import backgroundPattern from '@assets/images/bg-pattern.svg';

const Container = styled.main`
    position: relative;
    z-index: 10;
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
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 40rem;
    object-fit: cover;
    object-position: left bottom;

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        height: 45rem;
    }
`;

function Page() {
    return (
        <Container>
            <Hero />
            <Card />
            <Pattern src={ backgroundPattern } alt="Background pattern illustration" />
        </Container>
    )
}

export default Page;
