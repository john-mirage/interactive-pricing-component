import styled from 'styled-components';
import Slider from '@components/slider';
import Switch from '@components/switch';
import Features from '@components/features';
import Button from '@components/button';
import { useState } from 'react';

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

const priceTable = {
    "10k": 8,
    "50k": 12,
    "100k": 16,
    "500k": 24,
    "1m": 36,
};

const steps = {
    "0": "10k",
    "25": "50k",
    "50": "100k",
    "75": "500k",
    "100": "1m",
}

function getPrice(pageViews: string, plan: string) {
    if (plan === "month") {
        return priceTable[pageViews];
    } else if (plan === "year") {
        return (priceTable[pageViews] * 12) * 0.75;
    }
}

function Card() {
    const [pageViews, setPageViews] = useState("100k");
    const [plan, setPlan] = useState("month");
    const price = getPrice(pageViews, plan);
    const formatedPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price);

    function handlePageViews(newPageViews: number[]) {
        setPageViews(steps[String(newPageViews[0] * 100)]);
    }

    function handlePlan(isSelected: boolean) {
        setPlan(isSelected ? "year" : "month");
    }

    return (
        <Container>
            <PageViews id="page-views">{ pageViews } pageviews</PageViews>
            <Slider
                aria-labelledby="page-views"
                formatOptions={{ style: 'percent' }}
                maxValue={1}
                step={0.25}
                onChange={ handlePageViews }
            />
            <PricePerTime id="price-per-time">
                <Price>{ formatedPrice }</Price>
                <Period>/ { plan }</Period>
            </PricePerTime>
            <Switch onChange={ handlePlan } aria-labelledby="price-per-time" />
            <Divider />
            <Features />
            <Button />
        </Container>
    )
}

export default Card