import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 400px;
    column-gap: var(--spacing-16);

    label {
        display: block;
        margin-bottom: var(--spacing-8);
        font-weight: bold;
        font-size: var(--font-size-14);
        line-height: 1;

        .required-text {
            font-weight: normal;
            font-size: var(--font-size-12);
        }
    }

    .help-link {
        margin-bottom: var(--spacing-8);
        color: var(--color-lavender);
        font-size: var(--font-size-12);
        text-decoration: none;

        &:hover,
        &:focus {
            text-decoration: underline;
        }
    }
`;

export interface LabelProps {
    htmlFor: string;
    children: React.ReactNode;
    isRequired?: boolean;
    helpLink?: string;
    helpText?: string;
}

/**
 * Label component
 */
export const Label = ({
    htmlFor,
    children,
    isRequired,
    helpLink,
    helpText,
}: LabelProps) => {
    return (
        <Wrapper>
            <label htmlFor={htmlFor}>
                {children}{' '}
                {!isRequired && (
                    <span className='required-text'>(optional)</span>
                )}
            </label>

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
        </Wrapper>
    );
};

export default Label;
