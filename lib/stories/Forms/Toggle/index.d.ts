import React from 'react';
import { GlobalInputProps } from '../../../shared/types';
export interface ToggleProps extends GlobalInputProps {
    checked?: boolean;
}
/**
 * Toggle component
 */
export declare const Toggle: React.ForwardRefExoticComponent<Pick<ToggleProps, keyof ToggleProps> & React.RefAttributes<HTMLInputElement>>;
