import React from 'react';
import styled from 'styled-components';
import { Spinner } from '../../../';

const ButtonElement = styled.button<ButtonProps>`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 38px;
  padding: 0 var(--spacing-24);
  border: solid 2px ${(p) => `var(--color-${p.color})`};
  border-radius: 30px;
  color: ${(p) =>
    p.secondary ? `var(--color-${p.color})` : 'var(--color-white)'};
  font-weight: bold;
  font-family: var(--font-family);
  background: ${(p) =>
    p.secondary ? 'var(--color-white)' : `var(--color-${p.color})`};
  cursor: pointer;

  ${(p) =>
    p.disabled &&
    `opacity: 0.6; 
    cursor: not-allowed;
    `}
`;

const ButtonLabel = styled.span<{ hide?: boolean }>`
  opacity: ${(p) => (p.hide ? '0' : '1')};
`;

const ButtonSpinner = styled(Spinner)`
  position: absolute;
`;

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: 'black' | 'lavender';
  disabled?: boolean;
  loading?: boolean;
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
  loading,
  onClick,
  secondary,
  type = 'button',
}: ButtonProps) => {
  return (
    <ButtonElement
      aria-busy={loading}
      className={className}
      color={color}
      disabled={disabled || loading}
      onClick={onClick}
      secondary={secondary}
      type={type}
    >
      <ButtonLabel hide={loading}>{children}</ButtonLabel>
      {loading && (
        <ButtonSpinner color={secondary ? 'black' : 'white'} size={24} />
      )}
    </ButtonElement>
  );
};
