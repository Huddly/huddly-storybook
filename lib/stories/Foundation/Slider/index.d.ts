/// <reference types="react" />
export interface SliderProps {
    className?: string;
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
    length: number;
    resolution?: number;
    vertical?: boolean;
}
/**
 * Slider component
 */
export declare const Slider: ({ className, min, max, vertical, value, onChange, resolution, length, }: SliderProps) => JSX.Element;
