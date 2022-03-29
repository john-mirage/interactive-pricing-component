import styled from 'styled-components';
import Circles from '@assets/images/pattern-circles.svg';

const Container = styled.section`
    position: relative;
    z-index: 50;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 14.5rem;
    text-align: center;
    margin-bottom: 3.2rem;
    background-image: url(${Circles});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        margin-bottom: 5.4rem;
    }
`;

const Title = styled.h1`
    position: relative;
    z-index: 20;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.8rem;
    color: ${props => props.theme.color.neutral.darkDesaturatedBlue};
    margin-bottom: 0.8rem;

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        font-size: 2.8rem;
        margin-bottom: 1.6rem;
    }
`;

const Subtitle = styled.p`
    position: relative;
    z-index: 20;
    max-width: 18rem;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 2.3rem;
    color: ${props => props.theme.color.neutral.grayishBlue};

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        max-width: none;
        font-size: 1.5rem;
    }
`;

function Hero() {
    return (
        <Container>
            <Title>Simple, traffic-based pricing</Title>
            <Subtitle>Sign-up for our 30-day trial. No credit card required.</Subtitle>
        </Container>
    )
}

export default Hero