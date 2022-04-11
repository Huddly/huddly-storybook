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
  onSave?: (row: TableData) => void;
  isDefaultEditing?: boolean;
  rowIndex: number;
}

export const TableRow = ({
  columns,
  row,
  onSave,
  isDefaultEditing,
  rowIndex,
}: Props) => {
  const [isEditing, setIsEditing] = useState(isDefaultEditing);
  const [rowValue, setRowValue] = useState(row);
  const toggleEditing = () => {
    if (isEditing) {
      onSave(rowValue);
    }
    setIsEditing(!isEditing);
  };

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
          let renderValue = valueFormatter
            ? valueFormatter(rowValue)
            : rowValue[columnKey] ?? '';

          if (isEditing && editFormatter) {
            renderValue = editFormatter(rowValue, setRowValue);
          }

          return (
            <React.Fragment key={`column_${i}_row_${rowIndex}}`}>
              <TD align={align}>{renderValue}</TD>
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
