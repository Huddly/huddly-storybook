// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getColorHtml = (colors: any) => {
  return Object.entries(colors)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join('\n');
};

/* Blue Tones */
export enum BlueTonesEnum {
  whisperBlue = '#E5EBFE',
  plumbagoBlue = '#A6B9FF',
  lavender = '#5B5FFF',
  salviaBlue = '#4B4FE3',
  royalBlue = '#393CBD',
  marineBlue = '#3032A6',
}
export const BlueTonesHtml = getColorHtml(BlueTonesEnum);
export type BlueTones = keyof typeof BlueTonesEnum;

/* Yellow Tones */
export enum YellowTonesEnum {
  whisperYellow = '#FFF6D4',
  cheesecakeYellow = '#FFEEA8',
  sunYellow = '#E6C669',
  dijonYellow = '#BF9A34',
  curryYellow = '#A17E25',
  autumnYellow = '#8A6A19',
}
export const YellowTonesHtml = getColorHtml(YellowTonesEnum);
export type YellowTones = keyof typeof YellowTonesEnum;

/* Brown Tones */
export enum BrownTonesEnum {
  whisperOrange = '#FBDFBC',
  apricotOrange = '#F7BF79',
  caramelBrown = '#D3924E',
  cinnamonBrown = '#9C6127',
  leatherBrown = '#87501C',
  chocolateBrown = '#6E4117',
}
export const BrownTonesHtml = getColorHtml(BrownTonesEnum);
export type BrownTones = keyof typeof BrownTonesEnum;

/* Taupe Tones */
export enum TaupeTonesEnum {
  whisperTaupe = '#F6DCD2',
  macaronTaupe = '#EDBAA6',
  eveningTaupe = '#BA7F6B',
  clayTaupe = '#945441',
  chestnutTaupe = '#804636',
  rosewoodTaupe = '#69372A',
}
export const TaupeTonesHtml = getColorHtml(TaupeTonesEnum);
export type TaupeTones = keyof typeof TaupeTonesEnum;

/* Pink Tones */
export enum PinkTonesEnum {
  whisperPink = '#FFE2DD',
  candyflossPink = '#FFC3BA',
  petitePink = '#E39994',
  balloonPink = '#BD5C57',
  passionPink = '#A84340',
  burntPink = '#94332F',
}
export const PinkTonesHtml = getColorHtml(PinkTonesEnum);
export type PinkTones = keyof typeof PinkTonesEnum;

/* Orange Tones */
export enum OrangeTonesEnum {
  whisperCoral = '#FFD5BD',
  cantaloupeOrange = '#FFAE80',
  papayaOrange = '#E07B4C',
  fireOrange = '#B85227',
  burntOrange = '#A3421C',
  rustRed = '#8A3817',
}
export const OrangeTonesHtml = getColorHtml(OrangeTonesEnum);
export type OrangeTones = keyof typeof OrangeTonesEnum;

/* Green Tones */
export enum GreenTonesEnum {
  whisperGreen = '#EDEED8',
  greenTea = '#DCDEB1',
  springGreen = '#B6B77E',
  oliveGreen = '#8C8B50',
  mossGreen = '#73713F',
  oreganoGreen = '#616034',
}
export const GreenTonesHtml = getColorHtml(GreenTonesEnum);
export type GreenTones = keyof typeof GreenTonesEnum;

/* Dark gray Tones*/
export enum DarkGrayTonesEnum {
  grey45 = '#747474',
  grey35 = '#595959',
  grey25 = '#404040',
  grey15 = '#262626',
  grey10 = '#1A1A1A',
  black = '#000000',
}
export const DarkGrayTonesHtml = getColorHtml(DarkGrayTonesEnum);
export type DarkGrayTones = keyof typeof DarkGrayTonesEnum;

/* Bright Gray Tones */
export enum BrightGrayTonesEnum {
  grey98 = '#FAFAFA',
  grey96 = '#F5F5F5',
  grey91 = '#E8E8E8',
  grey86 = '#DBDBDB',
  grey76 = '#C2C2C2',
  grey62 = '#9E9E9E',
}
export const BrightGrayTonesHtml = getColorHtml(BrightGrayTonesEnum);
export type BrightGrayTones = keyof typeof BrightGrayTonesEnum;

/* Signal scale tones */
export enum SignalScaleTonesEnum {
  whisperCoral = '#FFD5BD',
  coralOrange = '#FF9C6B',
  signalOrange = '#EB6E3D',
  intenseOrange = '#B24319',
  hotOrange = '#993012',
  redWine = '#7A240C',
}
export const SignalScaleTonesHtml = getColorHtml(SignalScaleTonesEnum);
export type SignalScaleTones = keyof typeof SignalScaleTonesEnum;

/* White */
export enum WhiteEnum {
  white = '#fff',
}
export const WhiteHtml = getColorHtml(WhiteEnum);
export type White = keyof typeof WhiteEnum;

/* Standard colors */
export enum StandardColorsEnum {
  black = DarkGrayTonesEnum.black,
  lavender = BlueTonesEnum.lavender,
  white = WhiteEnum.white,
}
export const StandardColorsHtml = getColorHtml(StandardColorsEnum);
export type StandardColors = keyof typeof StandardColorsEnum;

/* Secondary colors */
export enum SecondaryColorsEnum {
  sunYellow = YellowTonesEnum.sunYellow,
  caramelBrown = BrownTonesEnum.caramelBrown,
  papayaOrange = OrangeTonesEnum.papayaOrange,
  eveningTaupe = TaupeTonesEnum.eveningTaupe,
  petitePink = PinkTonesEnum.petitePink,
  springGreen = GreenTonesEnum.springGreen,
}
export const SecondaryColorsHtml = getColorHtml(SecondaryColorsEnum);
export type SecondaryColors = keyof typeof SecondaryColorsEnum;

/* Indication colors */
export enum IndicationColorsEnum {
  inidiaicationRed = SignalScaleTonesEnum.signalOrange,
  indicationGreen = GreenTonesEnum.springGreen, // Not sure if this is the right color
}
export const IndicationColorsHtml = getColorHtml(IndicationColorsEnum);
export type IndicationColors = keyof typeof IndicationColorsEnum;

export type Colors =
  | BlueTones
  | YellowTones
  | OrangeTones
  | TaupeTones
  | PinkTones
  | BrownTones
  | GreenTones
  | SignalScaleTones
  | BrightGrayTones
  | DarkGrayTones
  | StandardColors;

const ColorValues = {
  ...BlueTonesEnum,
  ...YellowTonesEnum,
  ...OrangeTonesEnum,
  ...TaupeTonesEnum,
  ...PinkTonesEnum,
  ...BrownTonesEnum,
  ...GreenTonesEnum,
  ...SignalScaleTonesEnum,
  ...BrightGrayTonesEnum,
  ...DarkGrayTonesEnum,
  ...WhiteEnum,
};

export const getHexColor = (colorName: Colors) => ColorValues[colorName];
