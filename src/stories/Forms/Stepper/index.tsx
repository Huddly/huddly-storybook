import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: var(--spacing-32);
  --stepper-timing: 300ms;
`;

const Steps = styled.ol`
  display: grid;
  justify-content: end;
  margin: 0;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(${rem(50)}, 1fr));
  grid-gap: var(--spacing-16);
`;

const StepTitle = styled.span`
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
  min-width: var(--spacing-32);
  height: var(--spacing-32);
  border-radius: var(--spacing-16);
  color: var(--color-white);
  font-weight: bold;
  font-size: var(--font-size-14);
  background-color: var(--color-grey62);
  transition: background-color 100ms ease-in-out;
  padding-inline: var(--spacing-4);
`;

const Step = styled.li<{ highlight?: boolean }>`
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
  hasError?: boolean;
  steps: string[];
}

/**
 * Stepper component
 */
export const Stepper = ({ activeStep, className, hasError, steps }: StepperProps) => {
  return (
    <Wrapper className={className} aria-label='progress'>
      <Steps>
        {steps.map((step, index) => {
          const isCurrentStep = index + 1 === activeStep;
          const isInvalid = hasError && isCurrentStep;

          return (
            <Step
              key={index}
              aria-current={isCurrentStep || null}
              aria-onInvalid={isInvalid}
              highlight={index < activeStep}
            >
              <StepTitle>{step}</StepTitle>
              <StepBall aria-hidden={true}>{index + 1}</StepBall>
            </Step>
          );
        })}
      </Steps>

      <StepLine step={activeStep} totalSteps={steps.length} />
    </Wrapper>
  );
};
