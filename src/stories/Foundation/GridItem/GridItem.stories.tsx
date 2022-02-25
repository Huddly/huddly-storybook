import React from 'react';
import { GridItem } from '.';

export default { component: GridItem };

const placeholderStyles = {
  color: 'var(--color-white)',
  backgroundColor: 'var(--color-lavender)',
};

export const Grid2x2 = {
  args: {
    children: (
      <>
        <div style={placeholderStyles}>1</div>
        <div style={placeholderStyles}>2</div>
        <div style={placeholderStyles}>3</div>
        <div style={placeholderStyles}>4</div>
      </>
    ),
    columnGap: 16,
    rowGap: 16,
    columns: '200px 200px',
    rows: '200px 200px',
    alignItems: 'stretch',
    justifyItems: 'stretch',
  },
};
