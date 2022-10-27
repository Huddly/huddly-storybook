import React, { useEffect, useState } from 'react';
import { TableColumn, TableData } from '../../../shared/types';
import styled from 'styled-components';
import { Button } from '../../Forms/Button';
import { IconButton } from '../IconButton';
import { MenuMeatball } from '@huddly/frokost/havre';
import { Checkbox } from '../../Forms/Checkbox';

interface TDProps {
  align: 'left' | 'right' | 'center';
  isFirst?: boolean;
  isLast?: boolean;
}

const CheckboxCell = styled.td``;

const TableCell = styled.td<TDProps>`
  text-align: ${(p) => p.align};
  text-align: ${(p) => `-webkit-${p.align}`};
  padding-left: ${(p) => (p.isFirst ? 'var(--spacing-16)' : 0)};
  padding-right: ${(p) => (p.isLast ? 'var(--spacing-16)' : 0)};
`;

const TR = styled.tr<{ selected?: boolean }>`
  &:hover ${TableCell} {
    ${(p) => !p.selected && 'background-color: var(--color-grey96)'}
  }

  ${TableCell} {
    ${(p) => p.selected && 'background: var(--color-whisperBlue)'}
  }
`;

interface Props {
  columns: TableColumn[];
  row: TableData;
  onSave?: (row: TableData) => void;
  removeRow: (rowId: string) => void;
  hasCheckbox?: boolean;
  selectedRows?: string[];
  onClickCheckbox?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TableRow = ({
  columns,
  row,
  onSave,
  removeRow,
  hasCheckbox,
  selectedRows,
  onClickCheckbox,
}: Props) => {
  const [isEditing, setIsEditing] = useState(row.isNewRow);
  const [rowValue, setRowValue] = useState(row);

  useEffect(() => {
    setRowValue(row);
  }, [row]);

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
    <TR selected={selectedRows && selectedRows.includes(row.id)}>
      {hasCheckbox && selectedRows && (
        <CheckboxCell>
          <Checkbox
            id={row.id}
            onChange={onClickCheckbox}
            checked={selectedRows.includes(row.id)}
          />
        </CheckboxCell>
      )}
      {columns.map(
        ({ align = 'left', columnKey, editFormatter, valueFormatter, isSortable }, i) => {
          let renderValue = valueFormatter ? valueFormatter(rowValue) : rowValue[columnKey] ?? '';

          if (isEditing && editFormatter) {
            renderValue = editFormatter(rowValue, setRowValue);
          }

          return (
            <React.Fragment key={`column_${i}_row_${row.id}}`}>
              <TableCell align={align} isFirst={i === 0}>
                {renderValue}
              </TableCell>
              {isSortable && align === 'right' && <TableCell align='right' />}
            </React.Fragment>
          );
        }
      )}
      <TableCell align='right' isLast>
        {isEditing && (
          <Button onClick={onCancel} secondary>
            Cancel
          </Button>
        )}
        {row.isEditable && (
          <>
            {isEditing && <Button onClick={toggleEditing}>{isEditing ? 'Save' : 'Edit'}</Button>}
            {!isEditing && (
              <IconButton
                color='grey55'
                onClick={toggleEditing}
                icon={MenuMeatball}
                tooltipText='Edit'
              />
            )}
          </>
        )}
      </TableCell>
    </TR>
  );
};
