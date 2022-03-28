import { useSliderThumb } from '@react-aria/slider';
import { useFocusRing } from '@react-aria/focus';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { mergeProps } from '@react-aria/utils';
import { useRef } from 'react';

function SliderThumb(props) {
    let { state, trackRef, index } = props;
    let inputRef = useRef(null);
    let { thumbProps, inputProps } = useSliderThumb({
        index,
        trackRef,
        inputRef
    }, state);

    let { focusProps, isFocusVisible } = useFocusRing();
    return (
        <div
            style={{
                position: 'absolute',
                top: 4,
                transform: 'translateX(-50%)',
                left: `${state.getThumbPercent(index) * 100}%`
            }}
        >
            <div
                {...thumbProps}
                style={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: isFocusVisible
                        ? 'orange'
                        : state.isThumbDragging(index)
                            ? 'dimgrey'
                            : 'gray'
                }}
            >
                <VisuallyHidden>
                    <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
                </VisuallyHidden>
            </div>
        </div>
    );
}

export default SliderThumb;