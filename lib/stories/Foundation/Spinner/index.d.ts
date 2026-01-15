/// <reference types="react" />
import { Spacing8 } from '../../../shared/types';
import { StandardColors } from '../../../shared/colors';
export interface SpinnerProps {
    className?: string;
    color?: StandardColors;
    size?: Spacing8;
}
/**
 * Badge component
 */
export declare const Spinner: ({ className, color, size }: SpinnerProps) => JSX.Element;
