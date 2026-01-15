import React from 'react';
import { AlignX, AlignY } from './alignments';
export interface Props {
    children: React.ReactNode;
    className?: string;
    text: string;
    /**
     * @default 'center'
     */
    alignX?: AlignX;
    /**
     * @default 'top'
     */
    alignY?: AlignY;
}
/**
 * Tooltip component
 */
export declare const Tooltip: ({ children, className, text, alignX, alignY, }: Props) => JSX.Element;
