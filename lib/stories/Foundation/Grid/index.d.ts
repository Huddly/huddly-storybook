/// <reference types="react" />
import { Spacing8 } from '../../../shared/types';
export interface GridProps {
    rows?: string;
    columns?: string;
    rowGap?: Spacing8;
    columnGap?: Spacing8;
    justifyItems?: 'start' | 'end' | 'center' | 'stretch' | 'normal';
    alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'normal';
    children: JSX.Element | JSX.Element[];
    className?: string;
}
/**
 * Grid component
 */
export declare const Grid: ({ rows, columns, rowGap, columnGap, justifyItems, alignItems, children, className, }: GridProps) => JSX.Element;
