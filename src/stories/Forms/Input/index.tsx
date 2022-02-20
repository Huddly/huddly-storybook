import React, { useRef } from 'react';
import styled from 'styled-components';
import AlertText from '../../Foundation/AlertText';

interface FormGroupProps {
    hasError?: boolean;
}

const FormGroup = styled.div<FormGroupProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 400px;
    margin-bottom: var(--spacing-32);
    column-gap: var(--spacing-16);
    align-items: flex-start;

    label {
        display: block;
        margin-bottom: var(--spacing-8);
        font-weight: bold;
        line-height: 1;
        font-size: var(--font-size-14);

        .required-text {
            font-size: var(--font-size-12);
            font-weight: normal;
        }
    }

    .help-link {
        margin-bottom: var(--spacing-8);
        color: var(--color-lavender);
        text-decoration: none;
        font-size: var(--font-size-12);

        &:hover,
        &:focus {
            text-decoration: underline;
        }
    }

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
            `border-color: var(--color-alertRed);
            margin-bottom: var(--spacing-4);`}
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
    isRequired?: boolean;
    error?: string;
    helpLink?: string;
    helpText?: string;
}

/**
 * Input component
 */
export const Input = ({
    id,
    type,
    label,
    value,
    isRequired,
    error,
    helpLink,
    helpText,
}: InputProps) => {
    return (
        <FormGroup hasError={!!error}>
            {label && (
                <label htmlFor={id}>
                    {label}{' '}
                    {!isRequired && (
                        <span className='required-text'>(optional)</span>
                    )}
                </label>
            )}

            {helpLink && helpText && (
                <a
                    href={helpLink}
                    className='help-link'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {helpText}
                </a>
            )}

            <input
                id={id}
                name={id}
                type={type}
                required={isRequired}
                value={value}
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
