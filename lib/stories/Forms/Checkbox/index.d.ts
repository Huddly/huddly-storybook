import React from 'react';
import { GlobalInputProps } from '../../../shared/types';
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const FakeCheckbox: import("styled-components").StyledComponent<"label", any, {
    hasError: boolean;
}, never>;
export declare const CheckboxInput: import("styled-components").StyledComponent<"input", any, GlobalInputProps, never>;
export declare const LabelText: import("styled-components").StyledComponent<"span", any, {}, never>;
export declare const LabelLoading: import("styled-components").StyledComponent<"span", any, {}, never>;
export interface CheckboxProps extends GlobalInputProps {
    checked?: boolean;
    children?: React.ReactNode;
    loading?: boolean;
}
/**
 * Checkbox component
 */
export declare const Checkbox: React.ForwardRefExoticComponent<Pick<CheckboxProps, keyof CheckboxProps> & React.RefAttributes<HTMLInputElement>>;
