import React from 'react';
import { Spacing8 } from '../../../shared/types';
import { Colors } from '../../../shared/colors';
export interface FlexProps {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-revers';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'flex-start' | 'flex-end' | 'stretch' | 'center' | 'space-between' | 'space-around';
    rowGap?: Spacing8;
    columnGap?: Spacing8;
    children: React.ReactNode;
    background?: Colors;
    className?: string;
}
/**
 * Flex component
 */
export declare const Flex: ({ direction, wrap, justify, align, rowGap, columnGap, children, className, }: FlexProps) => JSX.Element;
