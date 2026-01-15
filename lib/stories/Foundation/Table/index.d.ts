import React from 'react';
import { TableData, TableColumn, Ordering } from '../../../shared/types';
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
export declare const Table: ({ className, columns, rows, fullWidth, ordering, setOrdering, onSaveNewRow, onSaveRow, removeRow, loading, withChecboxes, selectedRows, onClickCheckbox, }: TableProps) => JSX.Element;
