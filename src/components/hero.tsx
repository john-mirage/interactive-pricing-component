import styled from 'styled-components';
import Circles from '@assets/images/pattern-circles.svg';

const Container = styled.section`
    position: relative;
    z-index: 50;
    width: 100%;
    height: auto;
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    text-align: center;
    margin-bottom: 3.2rem;
`;

const Image = styled.img`
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14.6rem;
    height: 14.5rem;
`;

const Title = styled.h1`
    position: relative;
    z-index: 20;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.8rem;
    color: ${props => props.theme.color.neutral.darkDesaturatedBlue};
    margin-bottom: 0.8rem;
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
`;

function Hero() {
    return (
        <Container>
            <Image src={Circles} alt="Circles pattern illustration" />
            <Title>Simple, traffic-based pricing</Title>
            <Subtitle>Sign-up for our 30-day trial. No credit card required.</Subtitle>
        </Container>
    )
}

export default Hero