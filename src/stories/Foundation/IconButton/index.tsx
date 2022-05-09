import React from 'react';
import { Flex } from '../Flex';
import styled from 'styled-components';
import { Colors } from '../../../shared/colors';
import { Icon, Icons } from '../Icon';
import { Spinner } from '../Spinner';
import { Text } from '../Text';

const ButtonElement = styled.button<{ color: Colors }>`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  width: var(--spacing-24);
  height: var(--spacing-24);
  border-radius: 2px;
  position: relative;

  &:hover {
    background: var(--color-grey91);
    box-shadow: 0px 0px 0px 3px var(--color-grey91);
    div {
      display: flex;
    }
  }

  path {
    fill: ${(p) => `var(--color-${p.color})`};
  }
`;

const ToolTip = styled(Flex)`
  display: none;
  position: absolute;
  left: 50%;
  top: -135%;
  transform: translateX(-50%);
`;

const ToolTipText = styled(Text)`
  background: black;
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: 2px;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid black;
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
  return (
    <ButtonElement
      aria-busy={loading}
      className={className}
      color={color}
      disabled={disabled || loading}
      onClick={onClick}
      type={type}
    >
      {loading && <Spinner size={24} />}
      {!loading && (
        <>
          <Icon name={icon} />
          <ToolTip direction='column'>
            <ToolTipText color='white'>{tooltipText}</ToolTipText>
            <Triangle />
          </ToolTip>
        </>
      )}
    </ButtonElement>
  );
};
