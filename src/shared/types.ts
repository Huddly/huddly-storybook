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
export type Colors = StandardColors | SecondaryColors | IndicationColors;
export type ErrorSeverity = 'success' | 'info' | 'warning' | 'error';
export type GlobalInputProps = {
  ariaDescribedBy?: string;
  ariaErrorMessage?: string;
  className?: string;
  hasError?: boolean;
  id?: string;
  isRequired?: boolean;
  name?: string;
  value?: string;
  [x: string]: any;
};
