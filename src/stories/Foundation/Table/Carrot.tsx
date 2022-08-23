import React from 'react';
import { Direction } from '../../../shared/types';
import styled from 'styled-components';
import { ArrowUp, ArrowDown } from '@huddly/frokost/havre18px';
import { BrightGrayTonesEnum, DarkGrayTonesEnum } from 'src';

const Wrapper = styled.button<{
  currentSorting: boolean;
}>`
  padding-left: var(--spacing-8);
  background: none;
  border: none;
`;

interface Props {
  currentSorting: boolean;
  direction: Direction;
  onClick: () => void;
}

export const Carrot = ({ onClick, currentSorting, direction }: Props) => (
  <Wrapper onClick={onClick} currentSorting={currentSorting}>
    {(direction === 'DESC' || !currentSorting) && (
      <ArrowDown color={currentSorting ? DarkGrayTonesEnum.grey35 : BrightGrayTonesEnum.grey62} />
    )}
    {direction === 'ASC' && currentSorting && (
      <ArrowUp color={currentSorting ? DarkGrayTonesEnum.grey35 : BrightGrayTonesEnum.grey62} />
    )}
  </Wrapper>
);
