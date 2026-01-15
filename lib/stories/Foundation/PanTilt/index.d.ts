/// <reference types="react" />
export interface PanTiltProps {
    className?: string;
    updatePosition: (pan: number, tilt: number) => void;
    zoom: number;
    width: number;
    initialPositionPan?: number;
    initialPositionTilt?: number;
}
/**
 * PanTilt component
 * - The zoom values should be between 0 and 1
 * - The pan and tilt values are between -1 and 1
 */
export declare const PanTilt: ({ className, updatePosition, zoom, width, initialPositionPan, initialPositionTilt, }: PanTiltProps) => JSX.Element;
