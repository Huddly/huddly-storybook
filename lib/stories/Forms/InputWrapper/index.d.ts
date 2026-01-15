import React from 'react';
import { ErrorSeverity } from '../../../shared/types';
export interface InputWrapperProps {
    children: JSX.Element | JSX.Element[];
    className?: string;
    disableWidthConstraint?: boolean;
    id: string;
    isRequired?: boolean;
    loading?: boolean;
    name?: string;
    severity?: ErrorSeverity;
    severityMessage?: string;
}
/**
 * InputWrapper component
 */
export declare const InputWrapper: React.ForwardRefExoticComponent<InputWrapperProps & React.RefAttributes<HTMLDivElement>>;
