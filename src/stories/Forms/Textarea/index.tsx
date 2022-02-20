import React from 'react';
import styled from 'styled-components';
import Label from '../Label';
import AlertText from '../../Foundation/AlertText';
interface FormGroupProps {
    hasError?: boolean;
}

const FormGroup = styled.div<FormGroupProps>`
    display: block;
    max-width: 400px;
    margin-bottom: var(--spacing-32);

    textarea {
        display: block;
        width: 100%;
        height: var(--spacing-48);
        height: 120px;
        padding: var(--spacing-16);
        border: var(--border);
        border-radius: var(--border-radius);
        font-family: var(--font-family-primary);
        resize: vertical;
        // If there is an error, apply the error border
        ${(p) =>
            p.hasError &&
            `margin-bottom: var(--spacing-4);
            border-color: var(--color-alertRed);`}
    }
`;

export interface TextareaProps {
    id: string;
    label?: string;
    defaultValue?: string;
    isRequired?: boolean;
    error?: string;
    helpLink?: string;
    helpText?: string;
}

/**
 * Input component
 */
export const Textarea = ({
    id,
    label,
    defaultValue,
    isRequired,
    error,
    helpLink,
    helpText,
}: TextareaProps) => {
    return (
        <FormGroup hasError={!!error}>
            {label && (
                <Label
                    htmlFor={id}
                    isRequired={isRequired}
                    helpLink={helpLink}
                    helpText={helpText}
                >
                    {label}
                </Label>
            )}

            <textarea
                id={id}
                name={id}
                required={isRequired}
                defaultValue={defaultValue}
                aria-invalid={!!error}
                aria-errormessage={`${id}-error`}
            />

            {error && (
                <AlertText severity='error' id={`${id}-error`}>
                    {error}
                </AlertText>
            )}
        </FormGroup>
    );
};

export default Textarea;
