import React from 'react';
export interface ButtonProps {
    disabled?: boolean;
    label?: string;
    onClick?: () => void;
    role?: 'button' | 'submit' | 'anchor';
    secondary?: boolean;
    color?: 'black' | 'lavender';
    children?: React.ReactNode;
    href?: string;
}
/**
 * Button component
 */
export declare const Button: ({ children, disabled, label, onClick, role, color, secondary, href, }: ButtonProps) => JSX.Element;
