import React from 'react';
import styled from 'styled-components';
import { Spinner } from '../../Foundation/Spinner';
import { BlueTonesEnum, DarkGrayTonesEnum } from '../../../shared/colors';

const ButtonStateColors = {
  lavender: {
    default: BlueTonesEnum.lavender,
    hover: BlueTonesEnum.salviaBlue,
    active: BlueTonesEnum.royalBlue,
  },
  black: {
    default: 'black',
    hover: DarkGrayTonesEnum.grey25,
    active: DarkGrayTonesEnum.grey15,
  },
};

const ButtonElement = styled.button<{
  height: ButtonSizes;
  secondary: boolean;
  color: 'black' | 'lavender';
  disabled: boolean;
}>`
  --button-color: ${(p) => `var(--color-${p.color})`};
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: ${(p) => `${p.height}px`};
  padding: 0 var(--spacing-24);
  border: solid 2px var(--button-color);
  border-radius: 30px;
  color: ${(p) => (p.secondary ? 'var(--button-color)' : 'var(--color-white)')};
  font-family: var(--font-family);
  background: ${(p) => (p.secondary ? 'transparent' : 'var(--button-color)')};
  font-size: ${(p) => (p.height === 32 ? '16px' : '18px')};
  padding: ${(p) => (p.height === 32 ? '5px 12px' : '12px 20px')};
  cursor: pointer;

  :hover {
    background: ${(p) => (p.secondary ? 'var(--color-white)' : ButtonStateColors[p.color].hover)};
    border: ${(p) => `solid 2px ${ButtonStateColors[p.color].hover}`};
  }

  :active {
    background: ${(p) => (p.secondary ? 'var(--color-white)' : ButtonStateColors[p.color].active)};
    border: ${(p) => `solid 2px ${ButtonStateColors[p.color].active}`};
  }

  :disabled {
    background: var(--color-grey76);
    border-color: var(--color-grey76);
    color: var(--color-grey45);
    cursor: not-allowed;
  }

  :focus-visible {
    outline: 2px solid var(--color-lavender);
    outline-offset: 2px;
  }
`;

const ButtonLabel = styled.span<{ hide?: boolean }>`
  opacity: ${(p) => (p.hide ? '0' : '1')};
`;

const ButtonSpinner = styled(Spinner)`
  position: absolute;
`;

type ButtonSizes = 32 | 48;

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: 'black' | 'lavender';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  secondary?: boolean;
  size?: ButtonSizes;
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
  size = 32,
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
      height={size}
    >
      <ButtonLabel hide={loading}>{children}</ButtonLabel>
      {loading && <ButtonSpinner color={secondary ? 'black' : 'white'} size={24} />}
    </ButtonElement>
  );
};
