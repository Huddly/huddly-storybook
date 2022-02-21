import React from 'react';
import styled from 'styled-components';
import AlertText from '../../Foundation/AlertText';

const Wrapper = styled.div`
    display: block;
    max-width: 400px;
    margin-bottom: var(--spacing-32);
`;

const InputError = styled(AlertText)`
    margin-top: var(--spacing-4);
`;

interface InputWrapperProps {
    className?: string;
    children: JSX.Element | JSX.Element[];
    id: string;
    error: string;
}

/**
 * InputWrapper component
 */
export const InputWrapper = ({
    className,
    children,
    id,
    error,
}: InputWrapperProps) => {
    return (
        <Wrapper className={className}>
            {children}

            {error && (
                <InputError severity='error' id={`${id}-error`}>
                    {error}
                </InputError>
            )}
        </Wrapper>
    );
};

export default InputWrapper;
