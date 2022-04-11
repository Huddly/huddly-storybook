import React from 'react';
import { Direction } from './index';
import styled from 'styled-components';

const Wrapper = styled.button<{
  currentSorting: boolean;
  direction: Direction;
}>`
  padding-left: var(--spacing-8);
  background: none;
  border: none;
  transform: rotate(
    ${(p) => (p.direction === 'ASC' || !p.currentSorting ? '0deg' : '180deg')}
  );
  fill: ${(p) => (p.currentSorting ? 'var(--color-lavender)' : 'black')};
`;

interface Props {
  currentSorting: boolean;
  direction: Direction;
  onClick: () => void;
}

export const Carrot = ({ onClick, currentSorting, direction }: Props) => (
  <Wrapper
    onClick={onClick}
    currentSorting={currentSorting}
    direction={direction}
  >
    <svg height='9' width='13'>
      <polygon points='0,0 13,0 6.5,9' />
    </svg>
  </Wrapper>
);
