import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button<ButtonProps>`
  border: solid 2px ${(p) => `var(--color-${p.color})`};
  border-radius: 30px;
  padding: 0 var(--spacing-24);
  height: 38px;
  background: ${(p) =>
    p.secondary ? 'var(--color-white)' : `var(--color-${p.color})`};
  color: ${(p) =>
    p.secondary ? `var(--color-${p.color})` : 'var(--color-white)'};
  font-weight: bold;
  font-family: var(--font-family);
`;

const roleToHtmlTag = {
  button: 'button',
  submit: 'input',
  anchor: 'a',
};
export interface ButtonProps {
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
  role?: 'button' | 'submit' | 'anchor';
  secondary?: boolean;
  color?: 'black' | 'lavender';
  children?: React.ReactNode;
  href?: string;
  className?: string;
}

/**
 * Button component
 */
export const Button = ({
  children,
  className,
  disabled,
  label,
  onClick,
  role = 'button',
  color = 'black',
  secondary,
  href,
}: ButtonProps) => {
  const isSubmit = role === 'submit';
  return (
    <ButtonElement
      className={className}
      as={roleToHtmlTag[role] as any}
      disabled={disabled}
      onClick={onClick}
      type={isSubmit ? 'submit' : undefined}
      color={color}
      secondary={secondary}
      href={href}
    >
      {label && isSubmit ? label : children}
    </ButtonElement>
  );
};
