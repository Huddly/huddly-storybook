import React from 'react';
import { TableData, TableColumn } from '../../../../src/shared/types';
import styled from 'styled-components';
import { Carrot } from './Carrot';
import { TableRow } from './TableRow';
import { Flex } from '../Flex';

const StyledTable = styled.table<{ fullWidth: boolean }>`
  width: ${(p) => (p.fullWidth ? '100%' : 'auto')};
  border-spacing: 0;
`;

const TH = styled.td<{ align: 'left' | 'right' | 'center'; width: string }>`
  text-align: ${(p) => p.align};
  width: 1fr;
`;

export type Direction = 'ASC' | 'DESC';
interface Ordering {
  field: string;
  direction: Direction;
}

const invertedDirection: { [key: string]: Direction } = {
  ASC: 'DESC',
  DESC: 'ASC',
};
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
}: TableProps) => (
  <StyledTable fullWidth={fullWidth} className={className}>
    <thead>
      <tr>
        {columns.map(
          ({
            align = 'left',
            header,
            width = 'auto',
            isSortable,
            columnKey,
          }) => {
            const onClick = () => {
              const isCurrentlySelected = ordering.field === columnKey;
              const direction = isCurrentlySelected
                ? invertedDirection[ordering.direction]
                : 'ASC';
              setOrdering({
                field: columnKey,
                direction: direction,
              });
            };
            return (
              <React.Fragment key={`header_column_${columnKey}`}>
                <TH align={align} width={width}>
                  <Flex>
                    {header}
                    {isSortable && align !== 'right' && (
                      <Carrot
                        onClick={onClick}
                        currentSorting={ordering.field === columnKey}
                        direction={ordering.direction}
                      />
                    )}
                  </Flex>
                </TH>
                {isSortable && align === 'right' && (
                  <TH align='right' width='30px'>
                    <Carrot
                      onClick={onClick}
                      currentSorting={ordering.field === columnKey}
                      direction={ordering.direction}
                    />
                  </TH>
                )}
              </React.Fragment>
            );
          }
        )}
      </tr>
    </thead>
    <tbody>
      {rows.map((r) => (
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
