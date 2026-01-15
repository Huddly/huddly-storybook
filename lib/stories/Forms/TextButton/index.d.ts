import React from 'react';
type ButtonSizes = '14' | '16' | '18' | 14 | 16 | 18;
export interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    secondary?: boolean;
    size?: ButtonSizes;
    type?: 'button' | 'submit' | 'reset';
}
/**
 * Text Button component
 */
export declare const TextButton: ({ children, className, disabled, loading, onClick, type, size, }: ButtonProps) => JSX.Element;
export {};
