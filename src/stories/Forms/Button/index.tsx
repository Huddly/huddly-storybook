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

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: 'black' | 'lavender';
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  secondary?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button component
 */
export const Button = ({
  children,
  className,
  color = 'black',
  disabled,
  onClick,
  secondary,
  type = 'button',
}: ButtonProps) => {
  return (
    <ButtonElement
      className={className}
      color={color}
      disabled={disabled}
      onClick={onClick}
      secondary={secondary}
      type={type}
    >
      {children}
    </ButtonElement>
  );
};
