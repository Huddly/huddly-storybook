import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { Check } from '@huddly/frokost/havre';

const Wrapper = styled.div`
  position: relative;
  margin-bottom: var(--spacing-32);
  --step-line-timing: 300ms;
  height: 100%;
`;

const Steps = styled.ol<{ vertical: boolean }>`
  display: grid;
  justify-content: end;
  margin: 0;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-gap: var(--spacing-16);

  ${({ vertical }) =>
    vertical &&
    `
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
    grid-gap: var(--spacing-48);
  `}
`;

const StepTitle = styled.span`
  max-width: 100%;
  overflow: hidden;
  color: var(--color-grey15);
  font-size: var(--font-size-16);
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
  color: var(--color-royalBlue);
  font-weight: bold;
  font-size: var(--font-size-14);
  background-color: var(--color-plumbagoBlue);
  transition: color 100ms ease-in-out, background-color 100ms ease-in-out;
  padding-inline: var(--spacing-4);
`;

const Step = styled.li<{ alignLeft?: boolean; highlight?: boolean }>`
  display: flex;
  flex-direction: ${({ alignLeft }) => (alignLeft ? 'row-reverse' : 'column')};
  align-items: center;
  gap: var(--spacing-8);

  ${(p) =>
    p.alignLeft &&
    `
    justify-content: flex-end;
    `}

  ${(p) =>
    p.highlight &&
    `
    ${StepBall} { 
      color: var(--color-white);
      background-color: var(--color-lavender); 
      transition-delay: var(--step-line-timing); 
    }
    ${StepTitle} { 
      color: var(--color-black); 
      transition-delay: var(--step-line-timing); 
    }
  `}
`;

const StepLine = styled.span<{ step: number; totalSteps: number; vertical?: boolean }>`
  z-index: -1;
  position: absolute;
  top: ${(p) => (p.vertical ? '0' : 'auto')};
  right: ${(p) => (p.vertical ? 'auto' : `calc((100% / ${p.totalSteps}) / 2)`)};
  bottom: ${(p) => (p.vertical ? '0' : 'var(--spacing-16)')};
  left: ${(p) => (p.vertical ? 'var(--spacing-16)' : `calc((100% / ${p.totalSteps}) / 2)`)};
  height: ${rem(6)};
  overflow: hidden;
  background-color: var(--color-plumbagoBlue);
  transform: translateY(50%);

  ${(p) =>
    p.vertical &&
    `
    left: var(--spacing-16); // Half of the StepBall width
    width: ${rem(6)};
    height: auto;
    transform: translateX(-50%);
  `}

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: var(--spacing-4);
    content: '';
    background-color: var(--color-lavender);
    transition: transform var(--step-line-timing) ease-in-out;
    transform: ${(p) =>
      p.vertical
        ? `scaleY(calc(${p.step - 1} / ${p.totalSteps - 1}))`
        : `scaleX(calc(${p.step - 1} / ${p.totalSteps - 1}))`};
    transform-origin: ${(p) => (p.vertical ? 'top' : 'left')};
    will-change: transform;
  }
`;

export interface StepperProps {
  activeStep: number;
  className?: string;
  hasError?: boolean;
  steps: string[];
  vertical?: boolean;
}

/**
 * Stepper component
 */
export const Stepper = ({
  activeStep,
  className,
  hasError,
  steps,
  vertical = false,
}: StepperProps) => {
  return (
    <Wrapper className={className} aria-label='progress'>
      <Steps vertical={vertical}>
        {steps.map((step, index) => {
          const isCurrentStep = index + 1 === activeStep;
          const isCompleted = index + 1 < activeStep;
          const isInvalid = hasError && isCurrentStep;

          return (
            <Step
              key={index}
              alignLeft={vertical}
              aria-current={isCurrentStep || null}
              aria-onInvalid={isInvalid}
              highlight={index < activeStep}
            >
              <StepTitle>{step}</StepTitle>
              <StepBall aria-hidden={true}>
                {isCompleted ? <Check color='white' /> : index + 1}
              </StepBall>
            </Step>
          );
        })}
      </Steps>

      <StepLine step={activeStep} totalSteps={steps.length} vertical={vertical} />
    </Wrapper>
  );
};
