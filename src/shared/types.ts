export type Spacing8 = 0 | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64;
export type StandardColors = 'black' | 'white' | 'lavender';
export type SecondaryColors =
  | 'sunYellow'
  | 'caramelBrown'
  | 'signalOrange'
  | 'eveningTaupe'
  | 'petitePink'
  | 'springGreen';
export type IndicationColors = 'indicationRed' | 'indicationGreen';
export type ShadeColors = 'lavender30' | 'hawkes' | 'lightGray';
export type Colors =
  | StandardColors
  | SecondaryColors
  | IndicationColors
  | ShadeColors;
export type ErrorSeverity = 'success' | 'info' | 'warning' | 'error';
export interface GlobalInputProps {
  ariaDescribedBy?: string;
  ariaErrorMessage?: string;
  className?: string;
  hasError?: boolean;
  id?: string;
  isRequired?: boolean;
  name?: string;
  value?: string;
  [x: string]: any;
}

export interface TableColumn {
  columnKey: string;
  header: string;
  subHeader?: string;
  align?: 'left' | 'right' | 'center';
  width?: string;
  valueFormatter?: (row: TableData) => React.ReactNode;
  editFormatter?: (
    row: TableData,
    setRowData: (row: TableData) => void
  ) => React.ReactNode;
  isSortable: boolean;
}

export interface TableData {
  [columnKey: string]: string | number | Array<string | number>;
}
