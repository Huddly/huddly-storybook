/// <reference types="react" />
export interface InputProps {
    /**
     * type description.
     */
    type: string;
    /**
     * label description.
     */
    label?: string;
    /**
     * isRequired description.
     */
    isRequired?: boolean;
}
/**
 * Input component
 */
export declare const Input: ({ type, label, isRequired }: InputProps) => JSX.Element;
