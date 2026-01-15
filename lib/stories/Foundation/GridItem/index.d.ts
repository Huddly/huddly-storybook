/// <reference types="react" />
export interface GridItemProps {
    columnStart?: number | string;
    columnEnd?: number | string;
    rowStart?: number | string;
    rowEnd?: number | string;
    justifySelf?: 'start' | 'end' | 'center' | 'stretch';
    alignSelf?: 'start' | 'end' | 'center' | 'stretch';
    children?: JSX.Element | JSX.Element[];
    className?: string;
}
/**
 * GridItem component
 */
export declare const GridItem: ({ columnStart, columnEnd, rowStart, rowEnd, justifySelf, alignSelf, children, className, }: GridItemProps) => JSX.Element;
