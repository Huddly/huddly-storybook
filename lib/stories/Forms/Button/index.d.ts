import React from 'react';
type ButtonSizes = '32' | '48';
export interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    color?: 'black' | 'lavender' | 'intenseOrange';
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    secondary?: boolean;
    size?: ButtonSizes;
    type?: 'button' | 'submit' | 'reset';
}
/**
 * Button component
 */
export declare const Button: ({ children, className, color, disabled, loading, onClick, secondary, type, size, }: ButtonProps) => JSX.Element;
export {};
