import React from 'react';
export declare const Wrapper: import("styled-components").StyledComponent<"p", any, TextProps, never>;
export interface TextProps {
    size?: '14' | '18' | '22' | '28' | '48' | '68' | '98';
    color?: 'lavender' | 'sunYellow' | 'black' | 'signalOrange' | 'white' | 'signalOrange';
    type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'span';
    bold?: boolean;
    children: React.ReactChild;
}
/**
 * Text component
 */
export declare const Text: ({ size, color, type, bold, children, }: TextProps) => JSX.Element;
export default Text;
