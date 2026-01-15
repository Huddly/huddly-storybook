import React from 'react';
import { GlobalInputProps } from '../../../shared/types';
export interface TextAreaProps extends GlobalInputProps {
    /**
     * Height of the textarea in pixels.
     * @default 120
     */
    height?: number;
}
/**
 * TextArea component
 */
export declare const TextArea: React.ForwardRefExoticComponent<Pick<TextAreaProps, keyof TextAreaProps> & React.RefAttributes<HTMLTextAreaElement>>;
