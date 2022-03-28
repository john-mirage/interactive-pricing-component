import styled from 'styled-components';
import Badge from '@components/badge';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
`;

const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: auto;
`;

const Label = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => props.theme.color.neutral.grayishBlue};
`;

const Track = styled.span`
    display: block;
    width: 4.4rem;
    height: 2.2rem;
    padding: 0.4rem;
    border-radius: 9999px;
    background-color: ${props => props.theme.color.neutral.lightGrayishBlue};
    margin-left: 0.8rem;
    margin-right: 0.8rem;
`;

const Dot = styled.span`
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 9999px;
    background-color: ${props => props.theme.color.neutral.white};
`;

function Switch() {
    return (
        <Container>
            <Content>
                <Label>Monthly Billing</Label>
                <Track>
                    <Dot />
                </Track>
                <Label>Yearly Billing</Label>
                <Badge />
            </Content>
        </Container>
    )
}

export default Switch;