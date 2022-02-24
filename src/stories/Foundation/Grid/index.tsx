import React from 'react';
import styled from 'styled-components';
import { Spacing8 } from '../../../shared/types';

export interface GridProps {
  // can be a list of px, rem, fr, percent
  // fr is a fraction of free space, ex "1fr 1fr 1fr" will create three columns with one third each
  // repeat is shorthand when you have multiple columns with the same size
  // ex repeat(3, 1fr)
  rows?: string;
  columns?: string;
  rowGap?: Spacing8;
  columnGap?: Spacing8;
  justifyItems?: 'start' | 'end' | 'center' | 'stretch' | 'normal';
  alignItems?: 'start' | 'end' | 'center' | 'stretch' | 'normal';
  children: JSX.Element | JSX.Element[];
}

const Wrapper = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(p) => p.columns};
  grid-template-rows: ${(p) => p.rows};
  row-gap: ${(p) => `var(--spacing-${p.rowGap})`};
  column-gap: ${(p) => `var(--spacing-${p.columnGap})`};
  justify-items: ${(p) => p.justifyItems};
  align-items: ${(p) => p.alignItems};
`;

/**
 * Grid component
 */
export const Grid = ({
  rows = 'none',
  columns = 'none',
  rowGap = 0,
  columnGap = 0,
  justifyItems = 'normal',
  alignItems = 'normal',
  children,
}: GridProps) => {
  return (
    <Wrapper
      rows={rows}
      columns={columns}
      justifyItems={justifyItems}
      alignItems={alignItems}
      rowGap={rowGap}
      columnGap={columnGap}
    >
      {children}
    </Wrapper>
  );
};
