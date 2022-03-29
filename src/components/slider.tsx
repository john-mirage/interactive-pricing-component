import { useSlider } from '@react-aria/slider';
import { useSliderState } from '@react-stately/slider';
import { useNumberFormatter } from '@react-aria/i18n';
import { useRef } from 'react';
import SliderThumb from '@components/slider-thumb';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    touch-action: none;
    margin-bottom: 2.4rem;
    cursor: pointer;

    @media screen and (min-width: ${props => props.theme.screen.md}) {
        order: 3;
        margin-top: 3.2rem;
        margin-bottom: 4rem;
    }
`;

const TrackContainer = styled.div`
    position: relative;
    width: 100%;
    height: 4rem;
`;

const Track = styled.div`
    position: absolute;
    width: 100%;
    height: 0.8rem;
    top: 1.6rem;
    background-color: ${props => props.theme.color.neutral.veryLightGrayishBlue};
    border-radius: 9999px;
`;

const Progress = styled.div`
    width: ${props => props.lineWidth}%;
    height: 100%;
    background-color: ${props => props.theme.color.primary.softCyan};
    border-radius: 9999px;
`;

function Slider(props) {
    let trackRef = useRef(null);
    let numberFormatter = useNumberFormatter(props.formatOptions);
    let state = useSliderState({ ...props, numberFormatter });
    let { groupProps, trackProps } = useSlider(props, state, trackRef);

    return (
        <Container {...groupProps}>
            <TrackContainer {...trackProps} ref={trackRef}>
                <Track>
                    <Progress lineWidth={ state.getThumbPercent(0) * 100 } />
                </Track>
                <SliderThumb index={0} state={state} trackRef={trackRef} />
            </TrackContainer>
        </Container>
    );
}

export default Slider;