import styled from "styled-components";

interface PlanProps {
    price: string;
    period: string;
}

const Container = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: auto;
    margin-bottom: 3.6rem;

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        width: 50%;
        order: 2;
        justify-content: flex-end;
        margin-bottom: 0;
    }
`;

const Price = styled.span`
    display: block;
    font-size: 3.2rem;
    font-weight: 800;
    letter-spacing: -0.06rem;
    color: ${props => props.theme.color.neutral.darkDesaturatedBlue};
    margin-right: 0.8rem;

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        font-size: 4rem;
        letter-spacing: -0.08rem;
    }
`;

const Period = styled.span`
    display: block;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        font-size: 1.6rem;
    }
`;

function Plan({ price, period }: PlanProps) {
    return (
        <Container>
            <Price>{ price }</Price>
            <Period>/ { period }</Period>
        </Container>
    )
}

export default Plan;