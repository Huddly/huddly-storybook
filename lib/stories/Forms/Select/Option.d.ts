import React from 'react';
export interface OptionProps {
    children: React.ReactNode;
    value: string;
    /**
     * This prop gets passed down from the Select component automatically.
     */
    selected?: boolean;
    /**
     * This prop gets passed down from the Select component automatically.
     */
    hasCheckbox?: boolean;
    /**
     * This prop gets passed down from the Select component automatically.
     */
    onChange?: (value: string) => void;
    /**
     * This prop gets passed down from the Select component automatically.
     */
    isFocusable?: boolean;
}
/**
 * Option component
 */
export declare const Option: React.ForwardRefExoticComponent<OptionProps & React.RefAttributes<HTMLLIElement>>;
