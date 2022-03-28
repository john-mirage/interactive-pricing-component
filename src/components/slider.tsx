import { useSlider } from '@react-aria/slider';
import { useSliderState } from '@react-stately/slider';
import { useNumberFormatter } from '@react-aria/i18n';
import { useRef } from 'react';
import SliderThumb from '@components/slider-thumb';

function Slider(props) {
    let trackRef = useRef(null);
    let numberFormatter = useNumberFormatter(props.formatOptions);
    let state = useSliderState({ ...props, numberFormatter });
    let { groupProps, trackProps, labelProps, outputProps } = useSlider(props, state, trackRef);

    return (
        <div
            {...groupProps}
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                touchAction: 'none'
            }}
        >
            {/* Create a flex container for the label and output element. */}
            <div style={{ display: 'flex', alignSelf: 'stretch' }}>
                {props.label &&
                    <label {...labelProps}>{props.label}</label>}
                <output {...outputProps} style={{ flex: '1 0 auto', textAlign: 'end' }}>
                    {state.getThumbValueLabel(0)}
                </output>
            </div>
            {/* The track element holds the visible track line and the thumb. */}
            <div
                {...trackProps}
                ref={trackRef}
                style={{
                    position: 'relative',
                    height: 30,
                    width: ' 100%'
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        backgroundColor: 'gray',
                        height: 3,
                        top: 13,
                        width: '100%'
                    }}
                />
                <SliderThumb index={0} state={state} trackRef={trackRef} />
            </div>
        </div>
    );
}

export default Slider;