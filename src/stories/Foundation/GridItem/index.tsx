import React from 'react';
import styled from 'styled-components';
import rem from '@shared/pxToRem';

export interface GridItemProps {
  /*
    <line> – can be a number to refer to a numbered grid line, or a name to refer to a named grid line
    span <number> – the item will span across the provided number of grid tracks
    span <name> – the item will span across until it hits the next line with the provided name
    auto – indicates auto-placement, an automatic span, or a default span of one
    */
  //<number> | <name> | span <number> | span <name> | auto;
  columnStart?: number | string;
  columnEnd?: number | string;
  rowStart?: number | string;
  rowEnd?: number | string;
  justifySelf?: 'start' | 'end' | 'center' | 'stretch';
  alignSelf?: 'start' | 'end' | 'center' | 'stretch';
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const Wrapper = styled.div<GridItemProps>`
  grid-column-start: ${(p) => p.columnStart};
  grid-column-end: ${(p) => p.columnEnd};
  grid-row-start: ${(p) => p.rowStart};
  grid-row-end: ${(p) => p.rowEnd};
  justify-self: ${(p) => p.justifySelf};
  align-self: ${(p) => p.alignSelf};
`;

/**
 * GridItem component
 */
export const GridItem = ({
  columnStart = 'auto',
  columnEnd = 'auto',
  rowStart = 'auto',
  rowEnd = 'auto',
  justifySelf = 'stretch',
  alignSelf = 'stretch',
  children,
  className,
}: GridItemProps) => {
  return (
    <Wrapper
      columnStart={columnStart}
      columnEnd={columnEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
      justifySelf={justifySelf}
      alignSelf={alignSelf}
      className={className}
    >
      {children}
    </Wrapper>
  );
};
