import styled from 'styled-components';
import Slider from '@components/slider';
import Switch from '@components/switch';
import Features from '@components/features';
import Button from '@components/button';
import { useEffect, useState } from 'react';
import Plan from '@components/plan';

interface MonthPricePerPageViewsInterface {
    [key: string]: number;
}

interface pageViewsPerStepsInterface {
    [key: string]: string;
}

const Container = styled.div`
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

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        width: 32.7rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        width: 54rem;
        padding-left: 4.8rem;
        padding-right: 4.8rem;
    }
`;

const PageViews = styled.p`
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 0.17rem;
    text-transform: uppercase;
    color: ${props => props.theme.color.neutral.grayishBlue};
    margin-bottom: 2.4rem;

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        width: 50%;
    }
`;

const Divider = styled.div`
    width: 100%;
    height: 0.1rem;
    margin-top: 3.8rem;
    margin-bottom: 2.4rem;
    background-color: ${props => props.theme.color.neutral.veryLightGrayishBlue};

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        order: 5;
    }
`;

const monthPricePerPageViews: MonthPricePerPageViewsInterface = {
    "10k": 8,
    "50k": 12,
    "100k": 16,
    "500k": 24,
    "1m": 36,
};

const pageViewsPerSteps: pageViewsPerStepsInterface = {
    "0": "10k",
    "0.25": "50k",
    "0.5": "100k",
    "0.75": "500k",
    "1": "1m",
};

const priceFormatter = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: "USD",
});

const discount = 0.75;

function Card() {
    const [ pageViews, setPageViews ] = useState("100k");
    const [ period, setPeriod ] = useState("month");
    const [ price, setPrice ] = useState("$16.00");

    useEffect(() => {
        const pricePerMonth = monthPricePerPageViews[pageViews];
        if (period === "month") {
            const formatedPrice = priceFormatter.format(pricePerMonth);
            setPrice(formatedPrice);
        } else if (period === "year") {
            const pricePerYear = pricePerMonth * 12;
            const pricePerYearWithDiscount = pricePerYear * discount;
            const formatedPrice = priceFormatter.format(pricePerYearWithDiscount);
            setPrice(formatedPrice);
        }
    }, [ pageViews, period ]);

    function handlePageViews([ sliderValue ]: number[]) {
        const sliderValueString = String(sliderValue);
        setPageViews(pageViewsPerSteps[sliderValueString]);
    }

    function handlePeriod(switchValue: boolean) {
        setPeriod(switchValue ? "year" : "month");
    }

    return (
        <Container>
            <PageViews id="page-views">{ pageViews } pageviews</PageViews>
            <Slider
                aria-labelledby="page-views"
                formatOptions={{ style: 'percent' }}
                defaultValue={[0.5]}
                maxValue={1}
                step={0.25}
                onChange={ handlePageViews }
            />
            <Plan
                price={price}
                period={period}
            />
            <Switch
                onChange={ handlePeriod }
                aria-labelledby="price-per-time"
            />
            <Divider />
            <Features />
            <Button />
        </Container>
    )
}

export default Card