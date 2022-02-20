import React from 'react';
import styled from 'styled-components';
import Label from '../Label';
import AlertText from '../../Foundation/AlertText';

interface FormGroupProps {
    hasError?: boolean;
    isHidden?: boolean;
}

const FormGroup = styled.div<FormGroupProps>`
    display: block;
    max-width: 400px;
    margin-bottom: var(--spacing-32);
    // If the type is hidden, hide everything
    ${(p) => p.isHidden && `display: none;`}

    input {
        display: block;
        width: 100%;
        height: var(--spacing-48);
        padding: var(--spacing-16);
        border: var(--border);
        border-radius: var(--border-radius);
        // If there is an error, apply the error border
        ${(p) =>
            p.hasError &&
            `margin-bottom: var(--spacing-4);
            border-color: var(--color-alertRed);`}
    }
`;

export interface InputProps {
    id: string;
    type:
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'hidden'
        | 'month'
        | 'number'
        | 'password'
        | 'search'
        | 'tel'
        | 'text'
        | 'time'
        | 'url'
        | 'week';
    label?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isRequired?: boolean;
    error?: string;
    helpLink?: string;
    helpText?: string;
}

/**
 * Input component
 */
export const Input = (
    {
        id,
        type,
        label,
        value,
        onChange,
        isRequired,
        error,
        helpLink,
        helpText,
    }: InputProps,
    ref: React.RefObject<HTMLInputElement>
) => {
    return (
        <FormGroup
            hasError={!!error}
            isHidden={type === 'hidden'}
            aria-hidden={type === 'hidden'}
        >
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

            <input
                id={id}
                ref={ref}
                name={id}
                type={type}
                value={value}
                onChange={onChange}
                required={isRequired}
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

export default Input;
