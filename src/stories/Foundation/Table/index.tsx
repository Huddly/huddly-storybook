import React, { useState } from 'react';
import styled from 'styled-components';
import { Carrot } from './Carrot';
import { TableRow } from './TableRow';

const Wrapper = styled.table<{ fullWidth: boolean }>`
  width: ${(p) => (p.fullWidth ? '100%' : 'auto')};
  border-spacing: 0;
`;

const TH = styled.td<{ align: 'left' | 'right' | 'center'; width: string }>`
  text-align: ${(p) => p.align};
  width: 1fr;
`;
export interface TableColumn {
  columnKey: string;
  header: string;
  subHeader?: string;
  align?: 'left' | 'right' | 'center';
  width?: string;
  valueFormatter?: (
    value: string | number | Array<string | number>
  ) => React.ReactNode;
  editFormatter?: (
    value: string | number | Array<string | number>
  ) => React.ReactNode;
  isSortable: boolean;
}

export interface TableData {
  [columnKey: string]: string | number | Array<string | number>;
}

export interface TableProps {
  className?: string;
  rows: TableData[];
  columns: TableColumn[];
  fullWidth?: boolean;
}

/**
 * Table component
 */
export const Table = ({ className, columns, rows, fullWidth }: TableProps) => {
  const [currentSorting, setCurrentSorting] = useState(columns[0].columnKey);
  return (
    <Wrapper fullWidth={fullWidth} className={className}>
      <thead>
        <tr>
          {columns.map(
            ({
              align = 'left',
              header,
              width = 'auto',
              isSortable,
              columnKey,
            }) => (
              <>
                <TH align={align} width={width}>
                  {header}
                  {isSortable && align !== 'right' && (
                    <Carrot
                      onClick={() => setCurrentSorting(columnKey)}
                      currentSorting={currentSorting === columnKey}
                    />
                  )}
                </TH>
                {isSortable && align === 'right' && (
                  <Carrot
                    onClick={() => setCurrentSorting(columnKey)}
                    currentSorting={currentSorting === columnKey}
                  />
                )}
              </>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <TableRow columns={columns} row={r} />
        ))}
      </tbody>
    </Wrapper>
  );
};
