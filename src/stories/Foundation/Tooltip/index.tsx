import React from 'react';
import styled from 'styled-components';
import rem from '@shared/pxToRem';

import { Text } from '../Text';
import { Flex } from '../Flex';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  &:hover {
    div {
      display: flex;
    }
  }
`;

const ToolTips = styled(Flex)`
  display: none;
  position: absolute;
  // top and left is relative to size of wrapper
  left: 50%;
  top: ${rem(-4)};
  // transform is relative to size of tooltip
  transform: translate(-50%, -100%);
`;

const ToolTipText = styled(Text)`
  background: black;
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: ${rem(2)};
  white-space: nowrap;
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: ${rem(5)} solid transparent;
  border-right: ${rem(5)} solid transparent;
  border-top: ${rem(5)} solid black;
`;

export interface Props {
  text: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Tooltip component
 */
export const Tooltip = ({ text, children, className }: Props) => (
  <Wrapper className={className} role='tooltip'>
    <ToolTips direction='column'>
      <ToolTipText color='white'>{text}</ToolTipText>
      <Triangle />
    </ToolTips>
    {children}
  </Wrapper>
);
