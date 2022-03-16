import React, { useState } from 'react';
import { Colors } from '../../../shared/types';
import styled from 'styled-components';
import { TableColumn, TableData } from '.';
import { Button } from '../../Forms/Button';

const TD = styled.td<{
  align: 'left' | 'right' | 'center';
}>`
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
        ({
          align = 'left',
          columnKey,
          editFormatter,
          valueFormatter,
          isSortable,
        }) => {
          const value = row[columnKey] ?? '';

          let columnValue = valueFormatter ? valueFormatter(value) : value;
          if (isEditing && editFormatter) {
            columnValue = editFormatter(value);
          }

          return (
            <>
              <TD align={align}>{columnValue}</TD>
              {isSortable && align === 'right' && <TD align='right' />}
            </>
          );
        }
      )}
      <td>
        <Button onClick={toggleEditing}>{isEditing ? 'Save' : 'Edit'}</Button>
      </td>
    </TR>
  );
};
