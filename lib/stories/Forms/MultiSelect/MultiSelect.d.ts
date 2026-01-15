import React from 'react';
import { GlobalInputProps } from '../../../shared/types';
export interface SelectProps extends Omit<GlobalInputProps, 'value'> {
    /**
     * Option components to be rendered.
     */
    children: React.ReactNode;
    value: Array<string>;
    openOver: boolean;
}
/**
 * Select component
 */
export declare const MultiSelect: React.ForwardRefExoticComponent<Pick<SelectProps, keyof SelectProps> & React.RefAttributes<HTMLInputElement>>;
