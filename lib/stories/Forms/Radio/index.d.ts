import React from 'react';
import { GlobalInputProps } from '../../../shared/types';
export interface RadioProps extends GlobalInputProps {
    checked?: boolean;
    children?: React.ReactNode;
    loading?: boolean;
}
/**
 * Radio component
 */
export declare const Radio: React.ForwardRefExoticComponent<Pick<RadioProps, keyof RadioProps> & React.RefAttributes<HTMLInputElement>>;
