import React from 'react';
import { Colors } from '../../../shared/colors';
export interface ColorProps {
    color: Colors;
    children?: React.ReactNode;
    className?: string;
}
/**
 * Grid component
 */
export declare const ColorBox: ({ color, children, className }: ColorProps) => JSX.Element;
