import React from 'react';
export interface FormProps {
    children: React.ReactNode;
    [x: string]: any;
}
/**
 * Form component
 */
export declare const Form: (props: FormProps) => JSX.Element;
