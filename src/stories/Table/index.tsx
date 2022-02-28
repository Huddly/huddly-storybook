import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.table<{ fullWidth: boolean }>`
  width: ${(p) => (p.fullWidth ? '100%' : 'auto')};
`;

const TD = styled.td<{ align: 'left' | 'right' | 'center' }>`
  text-align: ${(p) => p.align};
`;

const TH = styled.td<{ align: 'left' | 'right' | 'center'; width: string }>`
  text-align: ${(p) => p.align};
  width: 1fr;
`;

interface Column {
  columnKey: string;
  header: string;
  subHeader?: string;
  align?: 'left' | 'right' | 'center';
  width?: string;
  valueFormatter?: (
    value: string | number | Array<string | number>
  ) => React.ReactNode;
}

interface Row {
  [columnKey: string]: string | number | Array<string | number>;
}

export interface TableProps {
  className?: string;
  rows: Row[];
  columns: Column[];
  fullWidth?: boolean;
}

/**
 * Table component
 */
export const Table = ({ className, columns, rows, fullWidth }: TableProps) => {
  return (
    <Wrapper fullWidth={fullWidth} className={className}>
      <thead>
        <tr>
          {columns.map(({ align = 'left', header, width = 'auto' }) => (
            <TH align={align} width={width}>
              {header}
            </TH>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr>
            {columns.map(({ align = 'left', columnKey, valueFormatter }) => {
              const value = r[columnKey] ?? '';
              const columnValue = valueFormatter
                ? valueFormatter(value)
                : value;
              return <TD align={align}>{columnValue}</TD>;
            })}
          </tr>
        ))}
      </tbody>
    </Wrapper>
  );
};
