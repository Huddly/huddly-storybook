import React from 'react';
import { ErrorSeverity } from '../../../shared/types';
export interface AlertTextProps {
    children?: React.ReactNode;
    className?: string;
    hideIcon?: boolean;
    id?: string;
    severity: ErrorSeverity;
}
/**
 * AlertText component
 */
export declare const AlertText: ({ children, className, hideIcon, id, severity, }: AlertTextProps) => JSX.Element;
