import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';

const Wrapper = styled.div`
  position: relative;
  --stepper-timing: 300ms;
`;

const Steps = styled.div`
  display: grid;
  justify-content: end;
  grid-template-columns: repeat(auto-fit, minmax(${rem(50)}, 1fr));
  grid-gap: var(--spacing-16);
`;

const StepTitle = styled.div`
  max-width: 100%;
  overflow: hidden;
  color: var(--color-grey62);
  font-weight: bold;
  font-size: var(--font-size-20);
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 100ms ease-in-out;
`;

const StepBall = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--spacing-32);
  height: var(--spacing-32);
  border-radius: 50%;
  color: var(--color-white);
  font-weight: bold;
  font-size: var(--font-size-14);
  background-color: var(--color-grey62);
  transition: background-color 100ms ease-in-out;
`;

const Step = styled.div<{ highlight?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: var(--spacing-8);

  ${(p) =>
    p.highlight &&
    `
    ${StepBall} { 
      background-color: var(--color-lavender); 
      transition-delay: var(--stepper-timing); 
    }
    ${StepTitle} { 
      color: var(--color-black); 
      transition-delay: var(--stepper-timing); 
    }
  `}
`;

const StepLine = styled.span<{ step: number; totalSteps: number }>`
  z-index: -1;
  position: absolute;
  right: 0;
  bottom: var(--spacing-16); // Half of the StepBall height
  left: 0;
  height: var(--spacing-8);
  border-radius: var(--spacing-4);
  overflow: hidden;
  background-color: var(--color-grey62);
  transform: translateY(50%);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--spacing-4);
    content: '';
    background-color: var(--color-lavender);
    transition: transform var(--stepper-timing) ease-in-out;
    transform: scaleX(
      calc((100% / ${(p) => p.totalSteps}) * ${(p) => p.step} - (100% / ${(p) => p.totalSteps}) / 2)
    );
    transform-origin: left;
  }
`;

export interface StepperProps {
  activeStep: number;
  className?: string;
  steps: string[];
}

/**
 * Stepper component
 */
export const Stepper = ({ activeStep, className, steps }: StepperProps) => {
  return (
    <Wrapper className={className}>
      <Steps>
        {steps.map((step, index) => (
          <Step key={index} highlight={index < activeStep}>
            <StepTitle>{step}</StepTitle>
            <StepBall>{index + 1}</StepBall>
          </Step>
        ))}
      </Steps>

      <StepLine step={activeStep} totalSteps={steps.length} />
    </Wrapper>
  );
};
