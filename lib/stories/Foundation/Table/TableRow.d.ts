import React from 'react';
import { TableColumn, TableData } from '../../../shared/types';
interface Props {
    columns: TableColumn[];
    row: TableData;
    onSave?: (row: TableData) => void;
    removeRow: (rowId: string) => void;
    hasCheckbox?: boolean;
    selectedRows?: string[];
    onClickCheckbox?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const TableRow: ({ columns, row, onSave, removeRow, hasCheckbox, selectedRows, onClickCheckbox, }: Props) => JSX.Element;
export {};
