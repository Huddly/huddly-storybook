import React from 'react';
import styled from 'styled-components';

import rem from '../../../shared/pxToRem';
import { Colors } from '../../../shared/colors';
import { Spinner, Tooltip } from '../../../index';

const ButtonElement = styled.button<{ color: Colors; loading: boolean; hoverColor: Colors }>`
  cursor: ${(p) => (p.loading ? 'not-allowed' : 'pointer')};
  border: none;
  background: none;
  padding: 0;
  width: var(--spacing-24);
  height: var(--spacing-24);
  border-radius: ${rem(1)};
  position: relative;

  &:hover {
    background: ${(p) => `var(--color-${p.hoverColor})`};
    box-shadow: 0 0 0 ${rem(3)} ${(p) => `var(--color-${p.hoverColor})`};
    div {
      display: flex;
    }
  }

  path {
    fill: ${(p) => `var(--color-${p.color})`};
  }
`;

export interface IconButtonProps {
  tooltipText?: string;
  className?: string;
  color?: Colors;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon: React.ComponentType;
  hoverColor?: Colors;
}

/**
 * Icon Button component
 */
export const IconButton = ({
  className,
  color = 'grey15',
  disabled,
  loading,
  onClick,
  type = 'button',
  icon: Icon,
  tooltipText,
  hoverColor = 'grey91',
}: IconButtonProps) => {
  const Button = () => (
    <ButtonElement
      aria-busy={loading}
      aria-label={tooltipText}
      className={className}
      color={color}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
      loading={loading}
      hoverColor={hoverColor}
    >
      {loading && <Spinner size='24' />}
      {!loading && <Icon />}
    </ButtonElement>
  );

  if (!tooltipText) {
    return <Button />;
  }

  return (
    <Tooltip text={tooltipText}>
      <Button />
    </Tooltip>
  );
};
