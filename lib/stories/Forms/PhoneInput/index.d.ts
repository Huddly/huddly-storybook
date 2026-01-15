import React from 'react';
import { GlobalInputProps } from '../../../shared/types';
export interface PhoneInputProps extends Omit<GlobalInputProps, 'type'> {
    type: never;
}
/**
 * PhoneInput component
 *
 * For context:
 * Country code is the international dialing code, e.g. +47 for Norway.
 * Region code is the ISO 3166-1 alpha-2 code, e.g. NO for Norway.
 */
export declare const PhoneInput: React.ForwardRefExoticComponent<Pick<PhoneInputProps, keyof PhoneInputProps> & React.RefAttributes<HTMLInputElement>>;
