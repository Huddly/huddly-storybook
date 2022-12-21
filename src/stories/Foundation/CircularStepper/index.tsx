import React from 'react';
import styled, { css } from 'styled-components';
import rem from '../../../shared/pxToRem';
import { Text } from '../Text';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  column-gap: var(--spacing-16);
`;

const ProgressWrapper = styled.svg`
  flex-shrink: 0;
  width: var(--progress-size);
  height: var(--progress-size);

  --progress-size: ${rem(60)};
  --progress-border-width: ${rem(6)};
  --progress-pi: ${Math.PI};
  --progress-dash-array: calc(
    2 * var(--progress-pi) * (var(--progress-size) / 2 - var(--progress-border-width) / 2)
  );
`;

const commonProgressStyles = css`
  stroke-width: var(--progress-border-width);
  fill: transparent;
  cy: calc(var(--progress-size) / 2);
  cx: calc(var(--progress-size) / 2);
  r: calc((var(--progress-size) - var(--progress-border-width)) / 2);
`;

const ProgressTrack = styled.circle`
  ${commonProgressStyles}
  stroke: var(--color-plumbagoBlue);
`;

const ProgressIndicator = styled.circle<{ step: number; totalSteps: number }>`
  ${commonProgressStyles}
  transition: stroke-dashoffset 0.3s ease-in-out;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  will-change: stroke-dashoffset;
  stroke: var(--color-lavender);
  stroke-dasharray: var(--progress-dash-array);
  stroke-dashoffset: calc(var(--progress-dash-array) * (1 - ${(p) => p.step / p.totalSteps}));
`;

const ProgressCount = styled.text`
  font-size: var(--font-size-16);
  fill: var(--color-royalBlue);
`;

export interface CircularStepperProps {
  activeStep: number;
  className?: string;
  hasError?: boolean;
  steps: string[];
}

/**
 * CircularStepper component
 */
export const CircularStepper = ({
  activeStep,
  className,
  hasError,
  steps,
}: CircularStepperProps) => {
  const clampedActiveStep = Math.min(Math.max(activeStep, 1), steps.length);
  const activeStepLabel = steps[clampedActiveStep - 1];

  return (
    <Wrapper className={className}>
      <ProgressWrapper
        aria-oninvalid={hasError}
        aria-valuemax={steps?.length}
        aria-valuemin={1}
        aria-valuenow={activeStep}
        role={hasError ? 'alert' : 'progressbar'}
      >
        <ProgressTrack />
        <ProgressIndicator step={clampedActiveStep} totalSteps={steps.length} />
        <ProgressCount x='50%' y='50%' textAnchor='middle' dominantBaseline='middle'>
          {clampedActiveStep}/{steps.length}
        </ProgressCount>
      </ProgressWrapper>

      <Text type='span' size='22' bold aria-label='progress-label'>
        {activeStepLabel}
      </Text>
    </Wrapper>
  );
};
