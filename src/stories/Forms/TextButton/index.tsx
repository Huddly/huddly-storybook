import React from 'react';
import styled from 'styled-components';
import rem from '@shared/pxToRem';
import { Spinner } from '../../Foundation/Spinner';

const ButtonElement = styled.button<{
  fontSize: ButtonSizes;
}>`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-size: ${(p) => rem(p.fontSize)};
  padding: 0 var(--spacing-24);
  color: var(--color-grey45);
  font-family: var(--font-family);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  :hover {
    color: var(--color-grey15);
  }

  :active {
    color: var(--color-black);
  }

  :disabled {
    cursor: not-allowed;
  }

  :focus-visible {
    outline: ${rem(2)} solid var(--color-lavender);
    outline-offset: ${rem(8)};
    border-radius: ${rem(8)};
  }
`;

const ButtonLabel = styled.span<{ hide?: boolean }>`
  opacity: ${(p) => (p.hide ? '0' : '1')};
`;

const ButtonSpinner = styled(Spinner)`
  position: absolute;
`;

type ButtonSizes = 14 | 16 | 18;

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  secondary?: boolean;
  size?: ButtonSizes;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Text Button component
 */
export const TextButton = ({
  children,
  className,
  disabled,
  loading,
  onClick,
  type = 'button',
  size = 16,
}: ButtonProps) => {
  return (
    <ButtonElement
      aria-busy={loading}
      className={className}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      fontSize={size}
    >
      <ButtonLabel hide={loading}>{children}</ButtonLabel>
      {loading && <ButtonSpinner size={24} />}
    </ButtonElement>
  );
};
