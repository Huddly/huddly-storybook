import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button<{ currentSorting: boolean }>`
  color: ${(p) => (p.currentSorting ? 'var(--color-lavender)' : 'black')};
  padding-left: var(--spacing-8);
  background: none;
  border: none;
  font-weight: bold;
`;

interface Props {
  currentSorting: boolean;
  onClick: () => void;
}

export const Carrot = ({ onClick, currentSorting }: Props) => (
  <Wrapper onClick={onClick} currentSorting={currentSorting}>
    V
  </Wrapper>
);
