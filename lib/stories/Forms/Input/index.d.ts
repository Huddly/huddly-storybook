import React from 'react';
import { GlobalInputProps } from '../../../shared/types';
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, {
    hasError?: boolean;
}, never>;
export interface InputProps extends GlobalInputProps {
    type?: 'date' | 'datetime-local' | 'email' | 'hidden' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
}
/**
 * Input component
 */
export declare const Input: React.ForwardRefExoticComponent<Pick<InputProps, keyof InputProps> & React.RefAttributes<HTMLInputElement>>;
