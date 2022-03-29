import styled from 'styled-components';
import Slider from '@components/slider';
import Switch from '@components/switch';
import Features from '@components/features';
import Button from '@components/button';

const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
    padding-left: 2.4rem;
    padding-right: 2.4rem;
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    border-radius: 0.8rem;
    background-color: ${props => props.theme.color.neutral.white};
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
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
    justify-content: flex-start;
    align-items: center;
    width: auto;
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

function Card() {
    return (
        <Container>
            <PageViews id="page-views">100k pageviews</PageViews>
            <Slider
                aria-labelledby="page-views"
                formatOptions={{ style: 'percent' }}
                maxValue={1}
                step={0.25}
            />
            <PricePerTime id="price-per-time">
                <Price>$16.00</Price>
                <Period>/ month</Period>
            </PricePerTime>
            <Switch aria-labelledby="price-per-time" />
            <Divider />
            <Features />
            <Button />
        </Container>
    )
}

export default Card