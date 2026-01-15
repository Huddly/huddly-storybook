/// <reference types="react" />
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
export declare const Stepper: (props: StepperProps) => JSX.Element;
