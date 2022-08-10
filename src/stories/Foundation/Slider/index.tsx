import React from 'react';
import styled from 'styled-components';
import rem from '@shared/pxToRem';

const Wrapper = styled.div<{ vertical: boolean; length: number }>`
  position: relative;
  width: ${(p) => (p.vertical ? rem(22) : rem(p.length))};
  height: ${(p) => (p.vertical ? rem(p.length) : rem(22))};
`;

const StyledInput = styled.input<{ vertical: boolean; length: number }>`
  position: absolute;
  width: ${(p) => rem(p.length)};
  height: ${rem(22)};
  background: transparent;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    height: ${rem(8)};
    border-radius: ${rem(420)};
    background-color: var(--color-grey91);
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    box-sizing: border-box;
    width: ${rem(22)};
    height: ${rem(22)};
    margin-top: ${rem(-7)};
    border-radius: 50%;
    background-color: var(--color-lavender);
    -webkit-appearance: none;
    border: ${rem(3)} solid white;
  }

  /* Styling for vertical slider */
  ${(p) =>
    p.vertical &&
    `transform: rotate(270deg) translate(${rem(-p.length)});
    transform-origin: top left;`}
`;

export interface SliderProps {
  className?: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  length: number; // sliders can't be responsive because of use of transform
  resolution?: number;
  vertical?: boolean;
}

/**
 * Slider component
 */
export const Slider = ({
  className,
  min,
  max,
  vertical = false,
  value,
  onChange,
  resolution = 1,
  length,
}: SliderProps) => {
  const onChangeValue = (e) => {
    onChange(parseFloat(e.target.value));
  };

  return (
    <Wrapper vertical={vertical} length={length}>
      <StyledInput
        length={length}
        className={className}
        vertical={vertical}
        type='range'
        min={min}
        max={max}
        value={value}
        step={resolution}
        onChange={onChangeValue}
      />
    </Wrapper>
  );
};
