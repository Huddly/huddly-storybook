import React from 'react';
import { Colors } from '../../../shared/colors';
export interface IconButtonProps {
    tooltipText?: string;
    className?: string;
    color?: Colors;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    icon: React.ComponentType;
    hoverColor?: Colors;
}
/**
 * Icon Button component
 */
export declare const IconButton: ({ className, color, disabled, loading, onClick, type, icon: Icon, tooltipText, hoverColor, }: IconButtonProps) => JSX.Element;
