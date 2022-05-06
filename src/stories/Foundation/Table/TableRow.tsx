import React, { useState } from 'react';
import { TableColumn, TableData } from '../../../shared/types';
import styled from 'styled-components';
import { Button } from '../../Forms/Button';

interface TDProps {
  align: 'left' | 'right' | 'center';
}

const TD = styled.td<TDProps>`
  text-align: ${(p) => p.align};
`;

const TR = styled.tr`
  background-color: white;
  height: var(--spacing-48);
  &:hover {
    background-color: var(--color-lavender30);
  }
`;

interface Props {
  columns: TableColumn[];
  row: TableData;
  onSave?: (row: TableData) => void;
  removeRow: (rowId: string) => void;
}

export const TableRow = ({ columns, row, onSave, removeRow }: Props) => {
  const [isEditing, setIsEditing] = useState(row.isNewRow);
  const [rowValue, setRowValue] = useState(row);
  const toggleEditing = () => {
    if (isEditing) {
      onSave(rowValue);
    }
    setIsEditing(!isEditing);
  };

  const onCancel = () => {
    // if this is a new row the row should be removed from the table when cancel
    if (row.isNewRow) {
      removeRow(row.id);
    }

    // set the row value back to the initial value to cancel editing
    setRowValue(row);
    setIsEditing(false);
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
            <React.Fragment key={`column_${i}_row_${row.id}}`}>
              <TD align={align}>{renderValue}</TD>
              {isSortable && align === 'right' && <TD align='right' />}
            </React.Fragment>
          );
        }
      )}
      <TD align='center'>
        {isEditing && (
          <Button onClick={onCancel} secondary>
            Cancel
          </Button>
        )}
        {row.isEditable && (
          <Button onClick={toggleEditing}>{isEditing ? 'Save' : 'Edit'}</Button>
        )}
      </TD>
    </TR>
  );
};
