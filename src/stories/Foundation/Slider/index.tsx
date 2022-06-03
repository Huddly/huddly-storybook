import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ vertical: boolean; length: number }>`
  position: relative;
  width: ${(p) => (p.vertical ? '22px' : `${p.length}px`)};
  height: ${(p) => (p.vertical ? `${p.length}px` : '22px')};
`;

const StyledInput = styled.input<{ vertical: boolean; length: number }>`
  position: absolute;
  width: ${(p) => `${p.length}px`};
  height: 22px;
  background: transparent;
  -webkit-appearance: none;
  transform: ${(p) =>
    p.vertical ? `rotate(270deg) translate(-${p.length}px)` : ''};
  transform-origin: ${(p) => (p.vertical ? 'top left' : '')};
  &::-webkit-slider-runnable-track {
    height: ${(p) => (p.vertical ? '8px' : '8px')};
    border-radius: 420px;
    background-color: var(--color-grey91);
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    box-sizing: border-box;
    width: 22px;
    height: 22px;
    margin-top: ${(p) => (p.vertical ? '-7px' : '-7px')};
    border-radius: 50%;
    background-color: var(--color-lavender);
    -webkit-appearance: none;
    border: 3px solid white;
  }
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
