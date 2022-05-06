import React from 'react';
import { TableData, TableColumn } from '../../../../src/shared/types';
import styled from 'styled-components';
import { TableRow } from './TableRow';
import TableHeaderItem from './TableHeaderItem';
import { Spinner } from '../Spinner';

const StyledTable = styled.table<{ fullWidth: boolean }>`
  width: ${(p) => (p.fullWidth ? '100%' : 'auto')};
  border-spacing: 0;
`;

export type Direction = 'ASC' | 'DESC';
export interface Ordering {
  field: string;
  direction: Direction;
}

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
}: TableProps) => (
  <StyledTable fullWidth={fullWidth} className={className}>
    <thead>
      <tr>
        {columns.map((c) => (
          <TableHeaderItem
            key={`${c.columnKey}_header`}
            {...c}
            ordering={ordering}
            setOrdering={setOrdering}
          />
        ))}
      </tr>
    </thead>
    <tbody>
      {loading && <Spinner />}
      {!loading &&
        rows.map((r) => (
          <TableRow
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
