import React from 'react';
import styled from 'styled-components';
import rem from '@shared/pxToRem';
import { Colors } from '@shared/colors';
import { Icon, Icons } from '../Icon';
import { Spinner } from '../Spinner';
import { Tooltip } from '../Tooltip';

const ButtonElement = styled.button<{ color: Colors }>`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  width: var(--spacing-24);
  height: var(--spacing-24);
  border-radius: ${rem(2)};
  position: relative;

  &:hover {
    background: var(--color-grey91);
    box-shadow: ${rem(0)} ${rem(0)} ${rem(0)} ${rem(3)} var(--color-grey91);
    div {
      display: flex;
    }
  }

  path {
    fill: ${(p) => `var(--color-${p.color})`};
  }
`;

export interface IconButtonProps {
  icon: Icons;
  tooltipText?: string;
  className?: string;
  color?: Colors;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
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
  icon,
  tooltipText,
}: IconButtonProps) => {
  const Button = () => (
    <ButtonElement
      aria-busy={loading}
      className={className}
      color={color}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
    >
      {loading && <Spinner size={24} />}
      {!loading && <Icon name={icon} />}
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
