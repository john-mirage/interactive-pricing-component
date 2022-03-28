import styled from 'styled-components';
import Switch from '@components/switch';
import Features from '@components/features';
import Button from '@components/button';

const Container = styled.main`
    width: 100%;
    height: auto;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    border-radius: 0.8rem;
    background-color: ${props => props.theme.color.neutral.white};
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    text-align: center;
`;

const PageViews = styled.p`
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 0.17rem;
    text-transform: uppercase;
    color: ${props => props.theme.color.neutral.grayishBlue};
    margin-bottom: 2.4rem;
`;

const PricePerTime = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-bottom: 3.6rem;
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

const Divider = styled.div`
    width: 100%;
    height: 0.1rem;
    margin-top: 3.8rem;
    margin-bottom: 2.4rem;
    background-color: ${props => props.theme.color.neutral.veryLightGrayishBlue};
`;

const ButtonLabel = styled.span`
    font-size: 1.2rem;
    font-weight: 800;
    color: ${props => props.theme.color.primary.paleBlue};
`;

function Card() {
    return (
        <Container>
            <PageViews>100k pageviews</PageViews>
            <PricePerTime>
                <Price>$16.00</Price>
                <Period>/ month</Period>
            </PricePerTime>
            <Switch />
            <Divider />
            <Features />
            <Button>
                <ButtonLabel>Start my trial</ButtonLabel>
            </Button>
        </Container>
    )
}

export default Card