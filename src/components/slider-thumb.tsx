import { useSliderThumb } from '@react-aria/slider';
import { useFocusRing } from '@react-aria/focus';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { mergeProps } from '@react-aria/utils';
import { MutableRefObject, useRef } from 'react';
import styled, { css } from 'styled-components';
import thumbImage from '@assets/images/icon-slider.svg';
import { AriaSliderThumbProps } from '@react-types/slider';
import { SliderState } from '@react-stately/slider';

interface SliderThumbProps {
    state: SliderState;
    trackRef: MutableRefObject<null>
}

interface ThumbContainerProps {
    thumbPosition: number;
}

interface ThumbProps {
    isFocused: boolean;
    isDragging: boolean;
}

const ThumbContainer = styled.div<ThumbContainerProps>`
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

const Thumb = styled.div<ThumbProps>`
    width: 4rem;
    height: 4rem;
    border-radius: 9999px;
    background-color: ${props => props.isDragging
        ? props.theme.color.primary.darkCyan
        : props.theme.color.primary.strongCyan
    };
    background-image: url(${thumbImage});
    background-repeat: no-repeat;
    background-position: center;
    transition: background-color 150ms;
    ${props => props.isFocused && css`
        outline: 0.2rem solid ${props.theme.color.neutral.darkDesaturatedBlue};
    `}

    &:hover {
        background-color: ${props => props.isDragging
            ? props.theme.color.primary.darkCyan
            : props.theme.color.primary.cyan
        };
    }
`;

function SliderThumb(props: AriaSliderThumbProps & SliderThumbProps) {
    let { state, trackRef, index } = props;
    let inputRef = useRef(null);
    let { thumbProps, inputProps } = useSliderThumb({ index, trackRef, inputRef }, state);
    let { focusProps, isFocusVisible } = useFocusRing();

    return (
        <ThumbContainer thumbPosition={state.getThumbPercent(index) * 100}>
            <Thumb isFocused={isFocusVisible} isDragging={state.isThumbDragging(index)} {...thumbProps}>
                <VisuallyHidden elementType="span">
                    <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
                </VisuallyHidden>
            </Thumb>
        </ThumbContainer>
    );
}

export default SliderThumb;