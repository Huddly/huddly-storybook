import React from 'react';
import { GlobalInputProps } from '../../../shared/types';
export interface SelectProps extends GlobalInputProps {
    /**
     * Option components to be rendered.
     */
    children: React.ReactNode;
    /**
     * Specify to open option list over the component
     */
    openOver: boolean;
}
/**
 * Select component
 */
export declare const Select: React.ForwardRefExoticComponent<Pick<SelectProps, keyof SelectProps> & React.RefAttributes<HTMLInputElement>>;
