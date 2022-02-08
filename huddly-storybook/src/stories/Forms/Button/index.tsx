import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children?: React.ReactNode;
    disabled?: boolean;
    label?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'anchor';
}

export const ButtonElement = styled.button`
    /* Your styles here */
`;

/**
 * Button component
 */
export const Button = ({
    children,
    disabled,
    label,
    onClick,
    type = 'button',
    ...props
}: ButtonProps) => {
    const handleHtmlTag = () => {
        switch (type) {
            case 'button':
                return 'button';
            case 'submit':
                return 'input';
            case 'anchor':
                return 'a';
        }
    };

    return (
        <>
            <ButtonElement
                as={handleHtmlTag()}
                disabled={disabled}
                onClick={() => {}}
                type={type === 'submit' && ('submit' as any)}
                {...props}
            >
                {label && type !== 'submit' ? label : children}
            </ButtonElement>
        </>
    );
};
