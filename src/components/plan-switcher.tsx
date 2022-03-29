import styled from "styled-components";
import Switch from "@components/switch";
import Badge from '@components/badge';

interface PlanSwitcherProps {
    switchPlan: (switchValue: boolean) => void;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (min-width: ${props => props.theme.screen.sm}) {
        flex-direction: row;
    }

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        width: 100%;
        order: 4;
        justify-content: center;
    }
`;

const Label = styled.span`
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

const LabelWithBadge = styled(Label)`
    position: relative;
`;

function PlanSwitcher(props: PlanSwitcherProps) {
    return (
        <Container>
            <Label>Monthly Billing</Label>
            <Switch
                onChange={ props.switchPlan }
                aria-labelledby="yearly-plan"
            />
            <LabelWithBadge id="yearly-plan">
                Yearly Billing
                <Badge />
            </LabelWithBadge>
        </Container>
    );
}

export default PlanSwitcher;