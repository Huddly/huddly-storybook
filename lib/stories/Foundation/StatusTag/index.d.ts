/// <reference types="react" />
import { ErrorSeverity } from '../../../shared/types';
export interface StatusTagProps {
    className?: string;
    children: string;
    severity: ErrorSeverity;
}
/**
 * StatusTag component
 */
export declare const StatusTag: ({ className, children, severity }: StatusTagProps) => JSX.Element;
