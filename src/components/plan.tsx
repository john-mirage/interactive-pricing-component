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
    }
`;

const Price = styled.span`
    display: block;
    font-size: 3.2rem;
    font-weight: 800;
    letter-spacing: -0.06rem;
    color: ${props => props.theme.color.neutral.darkDesaturatedBlue};
    margin-right: 0.8rem;
`;

const Period = styled.span`
    display: block;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

function Plan({ price, period }: PlanProps) {
    return (
        <Container id="price-per-time">
            <Price>{ price }</Price>
            <Period>/ { period }</Period>
        </Container>
    )
}

export default Plan;