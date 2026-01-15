import React from 'react';
import { Colors } from '../../../shared/colors';
export interface CardProps {
    background?: Colors;
    children: React.ReactNode;
    className?: string;
}
/**
 * Card component
 */
export declare const Card: ({ background, children, className }: CardProps) => JSX.Element;
