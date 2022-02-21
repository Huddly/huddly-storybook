import React from 'react';
import styled from 'styled-components';

import InputWrapper from '../InputWrapper';
import Label from '../Label';
interface WrapperProps {
    hasError?: boolean;
    isHidden?: boolean;
}

const Wrapper = styled(InputWrapper)<WrapperProps>`
    display: ${(p) => (p.isHidden ? 'none' : 'block')};

    input {
        display: block;
        width: 100%;
        height: var(--spacing-48);
        padding: var(--spacing-16);
        border: var(--border);
        border-radius: var(--border-radius);
        // If there is an error, apply the error border
        ${(p) => p.hasError && `border-color: var(--color-alertRed);`}
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
export const Input = React.forwardRef(
    (
        {
            id,
            type = 'text',
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
            <Wrapper
                id={id}
                hasError={!!error}
                isHidden={type === 'hidden'}
                aria-hidden={type === 'hidden'}
                error={error}
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
            </Wrapper>
        );
    }
);

export default Input;
