import React from 'react';
import styled from 'styled-components';

import rem from '../../../shared/pxToRem';
import { Colors } from '../../../shared/colors';
import { Spinner, Tooltip } from '../../../index';

const ButtonElement = styled.button<{ color: Colors; loading: boolean }>`
  cursor: ${(p) => (p.loading ? 'not-allowed' : 'pointer')};
  border: none;
  background: none;
  padding: 0;
  width: var(--spacing-24);
  height: var(--spacing-24);
  border-radius: ${rem(2)};
  position: relative;

  &:hover {
    background: var(--color-grey91);
    box-shadow: 0 0 0 ${rem(3)} var(--color-grey91);
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
    >
      {loading && <Spinner size={24} />}
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
