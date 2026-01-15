import React from 'react';
export interface ButtonGroupProps {
    children: React.ReactNode;
    vertical?: boolean;
    align?: 'left' | 'center' | 'right';
}
/**
 * ButtonGroup component
 */
export declare const ButtonGroup: (props: ButtonGroupProps) => JSX.Element;
