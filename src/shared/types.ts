export type Spacing8 = 0 | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64;

export type ErrorSeverity = 'success' | 'info' | 'warning' | 'error';
export interface GlobalInputProps {
  ariaDescribedBy?: string;
  ariaErrorMessage?: string;
  className?: string;
  hasError?: boolean;
  id?: string;
  isRequired?: boolean;
  name?: string;
  onBlur?: (event: React.FocusEvent) => void;
  onChange?: (event: React.ChangeEvent) => void;
  value?: string;
  [x: string]: any;
}

export interface TableColumn {
  columnKey: string;
  header: React.ReactNode;
  subHeader?: string;
  align?: 'left' | 'right' | 'center';
  width?: string;
  valueFormatter?: (row: TableData) => React.ReactNode;
  editFormatter?: (row: TableData, setRowData: (row: TableData) => void) => React.ReactNode;
  isSortable?: boolean;
}

export interface TableData {
  [columnKey: string]: any;
  // it is important that this ID is unique for each row
  // this is to ensure that rows are deleted correctly and react renders correctly when rerendered
  id: string;
  isNewRow?: boolean;
  isEditable?: boolean;
}

export type Direction = 'ASC' | 'DESC';
export interface Ordering {
  field: string;
  direction: Direction;
}
