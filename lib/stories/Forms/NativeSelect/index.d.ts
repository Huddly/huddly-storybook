import React from 'react';
import { GlobalInputProps } from '../../../shared/types';
export interface NativeSelectProps extends GlobalInputProps {
    children: React.ReactNode;
}
/**
 * Select component
 */
export declare const NativeSelect: React.ForwardRefExoticComponent<Pick<NativeSelectProps, keyof NativeSelectProps> & React.RefAttributes<HTMLSelectElement>>;
