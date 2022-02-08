import React from 'react';
import styled from 'styled-components';

export const ButtonElement = styled.button<Props>`
    border: solid 2px ${(p) => `var(--color-${p.color})`};
    border-radius: 30px;
    padding: 0 var(--spacing-24);
    height: 38px;
    background: ${(p) =>
        p.secondary ? 'var(--color-white)' : `var(--color-${p.color})`};
    color: ${(p) =>
        p.secondary ? `var(--color-${p.color})` : 'var(--color-white)'};
    font-family: 'Messina sans bold';
`;

const roleToHtmlTag = {
    button: 'button',
    submit: 'input',
    anchor: 'a',
};
interface Props {
    disabled?: boolean;
    label?: string;
    onClick?: () => void;
    role?: 'button' | 'submit' | 'anchor';
    secondary?: boolean;
    color?: 'black' | 'lavender';
    children?: React.ReactNode;
    href?: string;
}

/**
 * Button component
 */
export const Button = ({
    children,
    disabled,
    label,
    onClick,
    role = 'button',
    color = 'black',
    secondary,
    href,
}: Props) => {
    const isSubmit = role === 'submit';
    return (
        <ButtonElement
            as={roleToHtmlTag[role] as any}
            disabled={disabled}
            onClick={onClick}
            type={isSubmit && 'submit'}
            color={color}
            secondary={secondary}
            href={href}
        >
            {label && isSubmit ? label : children}
        </ButtonElement>
    );
};
