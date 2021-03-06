import styled from 'styled-components';
import Slider from '@components/slider';
import Features from '@components/features';
import Button from '@components/button';
import { useEffect, useState } from 'react';
import Plan from '@components/plan';
import PlanSwitcher from '@components/plan-switcher';

interface MonthPricePerPageViewsInterface {
    [key: string]: number;
}

interface pageViewsPerStepsInterface {
    [key: string]: string;
}

const Container = styled.div`
    position: relative;
    z-index: 50;
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
    border-radius: 1rem;
    background-color: ${props => props.theme.color.neutral.white};
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.15);

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        width: 32.7rem;
        margin-left: auto;
        margin-right: auto;
    }

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 54rem;
        padding-top: 4.8rem;
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
        margin-bottom: 0;
        font-size: 1.4rem;
        letter-spacing: 0.2rem;
    }
`;

const Divider = styled.div`
    width: calc(100% + 4.8rem);
    height: 0.1rem;
    margin-top: 4rem;
    margin-bottom: 2.4rem;
    margin-left: -2.4rem;
    margin-right: -2.4rem;
    background-color: ${props => props.theme.color.neutral.veryLightGrayishBlue};

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        width: calc(100% + 9.6rem);
        order: 5;
        margin-bottom: 3.2rem;
        margin-left: -4.8rem;
        margin-right: -4.8rem;
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
            <PageViews>{ pageViews } <span id="page-views">pageviews</span></PageViews>
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
            <PlanSwitcher
                switchPlan={ handlePeriod }
            />
            <Divider />
            <Features />
            <Button />
        </Container>
    )
}

export default Card