import React, { useState } from 'react';
import { Colors, TableColumn, TableData } from '../../../shared/types';
import styled from 'styled-components';
import { Button } from '../../Forms/Button';

interface TDProps {
  align: 'left' | 'right' | 'center';
}

const TD = styled.td<TDProps>`
  text-align: ${(p) => p.align};
  border-bottom: 1px solid black;
`;

const TR = styled.tr`
  background-color: white;
  height: var(--spacing-56);
  &:hover {
    background-color: var(--color-lavender30);
  }
`;

interface Props {
  columns: TableColumn[];
  row: TableData;
  backgroundColor?: Colors;
}

export const TableRow = ({ columns, row }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing(!isEditing);

  return (
    <TR>
      {columns.map(
        (
          {
            align = 'left',
            columnKey,
            editFormatter,
            valueFormatter,
            isSortable,
          },
          i
        ) => {
          const value = row[columnKey] ?? '';

          let columnValue = valueFormatter ? valueFormatter(value) : value;
          if (isEditing && editFormatter) {
            columnValue = editFormatter(value);
          }

          return (
            <React.Fragment key={`column_${i}_${Math.random()}}`}>
              <TD align={align}>{columnValue}</TD>
              {isSortable && align === 'right' && <TD align='right' />}
            </React.Fragment>
          );
        }
      )}
      <TD align='center'>
        <Button onClick={toggleEditing}>{isEditing ? 'Save' : 'Edit'}</Button>
      </TD>
    </TR>
  );
};
