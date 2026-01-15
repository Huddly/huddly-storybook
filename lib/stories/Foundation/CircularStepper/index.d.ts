/// <reference types="react" />
export interface CircularStepperProps {
    activeStep: number;
    className?: string;
    hasError?: boolean;
    steps: string[];
}
/**
 * CircularStepper component
 */
export declare const CircularStepper: ({ activeStep, className, hasError, steps, }: CircularStepperProps) => JSX.Element;
