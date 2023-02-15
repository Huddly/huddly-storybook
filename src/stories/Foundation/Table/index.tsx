import React from 'react';
import { TableData, TableColumn, Ordering } from '../../../shared/types';
import styled from 'styled-components';
import rem from '../../../shared/pxToRem';
import { TableRow } from './TableRow';
import TableHeaderItem from './TableHeaderItem';
import { Spinner } from '../Spinner';
import { Checkbox } from '../../Forms/Checkbox';

const StyledTable = styled.table<{ fullWidth: boolean }>`
  width: ${(p) => (p.fullWidth ? '100%' : 'auto')};
  border-spacing: 0;
  font-size: var(--font-size-16);
  border-bottom: ${rem(1)} solid var(--color-grey91);
  border-spacing: 0 ${rem(2)};

  tr {
    height: ${rem(46)};
  }
`;

const HeaderRow = styled.thead`
  th {
    border-bottom: ${rem(1)} solid var(--color-grey91);
  }
`;

const CheckBoxCell = styled.th`
  width: ${rem(40)};
  padding-right: var(--spacing-16);
`;

export interface TableProps {
  className?: string;
  rows: TableData[];
  columns: TableColumn[];
  fullWidth?: boolean;
  ordering?: Ordering;
  setOrdering?: (ordering: Ordering) => void;
  onSaveRow?: (row: TableData) => void;
  onSaveNewRow?: (row: TableData) => void;
  removeRow?: (rowId: string) => void;
  loading?: boolean;
  withChecboxes?: boolean;
  onClickCheckbox?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedRows?: string[];
}

/**
 * Table component
 */
export const Table = ({
  className,
  columns,
  rows,
  fullWidth,
  ordering,
  setOrdering,
  onSaveNewRow,
  onSaveRow,
  removeRow,
  loading,
  withChecboxes,
  selectedRows,
  onClickCheckbox,
}: TableProps) => (
  <StyledTable fullWidth={fullWidth} className={className}>
    <HeaderRow>
      <tr>
        {withChecboxes && selectedRows && (
          <CheckBoxCell>
            <Checkbox
              id='all'
              checked={selectedRows.length === rows.length && rows.length > 0}
              onChange={onClickCheckbox}
            />
          </CheckBoxCell>
        )}
        {columns.map((c, i) => (
          <TableHeaderItem
            index={i}
            key={`${c.columnKey}_header`}
            {...c}
            ordering={ordering}
            setOrdering={setOrdering}
          />
        ))}
        {/*Empty table header for edit column*/}
        <th />
      </tr>
    </HeaderRow>
    <tbody>
      {loading && (
        <tr>
          <td>
            <Spinner />
          </td>
        </tr>
      )}
      {!loading &&
        rows.map((r) => (
          <TableRow
            onClickCheckbox={onClickCheckbox}
            selectedRows={selectedRows}
            hasCheckbox={withChecboxes}
            columns={columns}
            row={r}
            key={`row_${r.id}`}
            onSave={r.isNewRow ? onSaveNewRow : onSaveRow}
            removeRow={removeRow}
          />
        ))}
    </tbody>
  </StyledTable>
);
