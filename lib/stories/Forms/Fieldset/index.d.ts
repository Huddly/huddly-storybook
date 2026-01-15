import React from 'react';
export interface FieldsetProps {
    ariaDescribedBy?: string;
    ariaErrorMessage?: string;
    children: React.ReactNode;
    className?: string;
    hasError?: boolean;
    legend?: string | null;
}
/**
 * Fieldset component
 */
export declare const Fieldset: ({ ariaDescribedBy, ariaErrorMessage, children, className, hasError, legend, }: FieldsetProps) => JSX.Element;
