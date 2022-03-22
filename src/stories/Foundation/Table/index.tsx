import React, { useState } from 'react';
import { TableData, TableColumn } from '../../../../src/shared/types';
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
              <React.Fragment key={`header_column_${columnKey}`}>
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
                  <TH align='right' width='30px'>
                    <Carrot
                      onClick={() => setCurrentSorting(columnKey)}
                      currentSorting={currentSorting === columnKey}
                    />
                  </TH>
                )}
              </React.Fragment>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <TableRow
            columns={columns}
            row={r}
            key={`row_${i}_${Object.keys(r)[0]}`}
          />
        ))}
      </tbody>
    </Wrapper>
  );
};
