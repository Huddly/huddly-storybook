import React from 'react';
import styled from 'styled-components';

import InputWrapper from '../InputWrapper';
import Label from '../Label';
interface WrapperProps {
    hasError?: boolean;
}

const Wrapper = styled(InputWrapper)<WrapperProps>`
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
        ${(p) => p.hasError && `border-color: var(--color-alertRed);`}
    }
`;

export interface TextAreaProps {
    id: string;
    label?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    isRequired?: boolean;
    error?: string;
    helpLink?: string;
    helpText?: string;
}

/**
 * TextArea component
 */
export const TextArea = React.forwardRef(
    (
        {
            id,
            label,
            value,
            onChange,
            isRequired,
            error,
            helpLink,
            helpText,
        }: TextAreaProps,
        ref: React.RefObject<HTMLTextAreaElement>
    ) => {
        return (
            <Wrapper id={id} hasError={!!error} error={error}>
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
                    ref={ref}
                    name={id}
                    required={isRequired}
                    value={value}
                    onChange={onChange}
                    aria-invalid={!!error}
                    aria-errormessage={`${id}-error`}
                />
            </Wrapper>
        );
    }
);

export default TextArea;
