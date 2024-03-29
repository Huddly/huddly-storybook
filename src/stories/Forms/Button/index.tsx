import React from 'react';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { Spinner } from '../../Foundation/Spinner';
import { BlueTonesEnum, DarkGrayTonesEnum, SignalScaleTonesEnum } from '../../../shared/colors';

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
  intenseOrange: {
    default: SignalScaleTonesEnum.intenseOrange,
    hover: SignalScaleTonesEnum.hotOrange,
    active: SignalScaleTonesEnum.redWine,
  },
};

const ButtonElement = styled.button<{
  height: ButtonSizes;
  secondary: boolean;
  color: 'black' | 'lavender' | 'intenseOrange';
  disabled: boolean;
}>`
  --button-color: ${(p) => `var(--color-${p.color})`};
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: ${(p) => rem(p.height)};
  padding: 0 var(--spacing-24);
  border: solid ${rem(2)} var(--button-color);
  border-radius: ${rem(30)};
  color: ${(p) => (p.secondary ? 'var(--button-color)' : 'var(--color-white)')};
  font-family: var(--font-family);
  background: ${(p) => (p.secondary ? 'transparent' : 'var(--button-color)')};
  font-size: ${(p) => (p.height === '32' ? `${rem(16)}` : `${rem(18)}`)};
  padding: ${(p) => (p.height === '32' ? `${rem(5)} ${rem(12)}` : `${rem(12)} ${rem(20)}`)};
  cursor: pointer;

  :hover {
    background: ${(p) => (p.secondary ? 'transparent' : ButtonStateColors[p.color].hover)};
    border: ${(p) => `solid ${rem(2)} ${ButtonStateColors[p.color].hover}`};
  }

  :active {
    background: ${(p) => (p.secondary ? 'transparent' : ButtonStateColors[p.color].active)};
    border: ${(p) => `solid ${rem(2)} ${ButtonStateColors[p.color].active}`};
  }

  :disabled {
    background: var(--color-grey76);
    border-color: var(--color-grey76);
    color: var(--color-grey45);
    cursor: not-allowed;
  }

  :focus-visible {
    outline: ${rem(2)} solid var(--color-lavender);
    outline-offset: ${rem(2)};
  }
`;

const ButtonLabel = styled.span<{ hide?: boolean }>`
  opacity: ${(p) => (p.hide ? '0' : '1')};
`;

const ButtonSpinner = styled(Spinner)`
  position: absolute;
`;

type ButtonSizes = '32' | '48';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  color?: 'black' | 'lavender' | 'intenseOrange';
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
  size = '32',
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
      {loading && <ButtonSpinner color={secondary ? 'black' : 'white'} size='24' />}
    </ButtonElement>
  );
};
