import styled from 'styled-components';
import Hero from '@components/hero';
import Card from '@components/card';

const Container = styled.main`
    width: 100%;
    min-height: 100vh;
    padding-top: 5.6rem;
    padding-bottom: 8.8rem;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    background-color: ${props => props.theme.color.neutral.white};
`;

function Page() {
    return (
        <Container>
            <Hero />
            <Card />
        </Container>
    )
}

export default Page;
