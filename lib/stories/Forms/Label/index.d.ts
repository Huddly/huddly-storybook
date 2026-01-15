import React from 'react';
export interface LabelProps {
    children: React.ReactNode;
    className?: string;
    helpLabel?: string;
    helpLink?: string;
    htmlFor?: string;
    id?: string;
    isRequired?: boolean;
}
/**
 * Label component
 */
export declare const Label: ({ children, className, helpLabel, helpLink, htmlFor, id, isRequired, }: LabelProps) => JSX.Element;
