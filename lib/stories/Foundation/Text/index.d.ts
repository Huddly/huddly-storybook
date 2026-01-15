import React from 'react';
import { Colors } from '../../../shared/colors';
export declare const Wrapper: import("styled-components").StyledComponent<"p", any, TextProps, never>;
export interface TextProps {
    size?: '12' | '14' | '16' | '18' | '22' | '28' | '48' | '68' | '98';
    color?: Colors;
    type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
    bold?: boolean;
    extraLetterSpacing?: boolean;
    children: React.ReactNode;
    className?: string;
}
/**
 * Text component
 */
export declare const Text: ({ size, color, type, bold, children, className, extraLetterSpacing, }: TextProps) => JSX.Element;
