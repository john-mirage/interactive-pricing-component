import { useSliderThumb } from '@react-aria/slider';
import { useFocusRing } from '@react-aria/focus';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { mergeProps } from '@react-aria/utils';
import { useRef } from 'react';
import styled from 'styled-components';
import thumbImage from '@assets/images/icon-slider.svg';

const ThumbContainer = styled.div`
    position: absolute;
    top: 0;
    left: ${props => props.thumbPosition}%;
    transform: ${props => props.thumbPosition === 0
        ? "translateX(0)"
        : props.thumbPosition === 100
        ? "translateX(-100%)"
        : "translateX(-50%)"
    };
`;

const Thumb = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 9999px;
    background-color: ${props => props.isFocused
            ? props.theme.color.primary.darkCyan
            : props.state.isThumbDragging(props.index)
            ? props.theme.color.primary.cyan
            : props.theme.color.primary.strongCyan
    };
    background-image: url(${thumbImage});
    background-repeat: no-repeat;
    background-position: center;
`;

function SliderThumb(props) {
    let { state, trackRef, index } = props;
    let inputRef = useRef(null);
    let { thumbProps, inputProps } = useSliderThumb({ index, trackRef, inputRef }, state);
    let { focusProps, isFocusVisible } = useFocusRing();
    
    return (
        <ThumbContainer thumbPosition={state.getThumbPercent(index) * 100}>
            <Thumb isFocused={isFocusVisible} state={state} index={index} {...thumbProps}>
                <VisuallyHidden>
                    <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
                </VisuallyHidden>
            </Thumb>
        </ThumbContainer>
    );
}

export default SliderThumb;