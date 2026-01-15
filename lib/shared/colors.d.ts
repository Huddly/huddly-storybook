export declare enum BlueTonesEnum {
    whisperBlue = "#E5EBFE",
    plumbagoBlue = "#A6B9FF",
    lavender = "#5B5FFF",
    salviaBlue = "#4B4FE3",
    royalBlue = "#393CBD",
    marineBlue = "#3032A6"
}
export declare const BlueTonesHtml: string;
export type BlueTones = keyof typeof BlueTonesEnum;
export declare enum YellowTonesEnum {
    whisperYellow = "#FFF6D4",
    cheesecakeYellow = "#FFEEA8",
    sunYellow = "#E6C669",
    dijonYellow = "#BF9A34",
    curryYellow = "#A17E25",
    autumnYellow = "#8A6A19"
}
export declare const YellowTonesHtml: string;
export type YellowTones = keyof typeof YellowTonesEnum;
export declare enum BrownTonesEnum {
    whisperOrange = "#FBDFBC",
    apricotOrange = "#F7BF79",
    caramelBrown = "#D3924E",
    cinnamonBrown = "#9C6127",
    leatherBrown = "#87501C",
    chocolateBrown = "#6E4117"
}
export declare const BrownTonesHtml: string;
export type BrownTones = keyof typeof BrownTonesEnum;
export declare enum TaupeTonesEnum {
    whisperTaupe = "#F6DCD2",
    macaronTaupe = "#EDBAA6",
    eveningTaupe = "#BA7F6B",
    clayTaupe = "#945441",
    chestnutTaupe = "#804636",
    rosewoodTaupe = "#69372A"
}
export declare const TaupeTonesHtml: string;
export type TaupeTones = keyof typeof TaupeTonesEnum;
export declare enum PinkTonesEnum {
    whisperPink = "#FFE2DD",
    candyflossPink = "#FFC3BA",
    petitePink = "#E39994",
    balloonPink = "#BD5C57",
    passionPink = "#A84340",
    burntPink = "#94332F"
}
export declare const PinkTonesHtml: string;
export type PinkTones = keyof typeof PinkTonesEnum;
export declare enum OrangeTonesEnum {
    whisperCoral = "#FFD5BD",
    cantaloupeOrange = "#FFAE80",
    papayaOrange = "#E07B4C",
    fireOrange = "#B85227",
    burntOrange = "#A3421C",
    rustRed = "#8A3817"
}
export declare const OrangeTonesHtml: string;
export type OrangeTones = keyof typeof OrangeTonesEnum;
export declare enum GreenTonesEnum {
    whisperGreen = "#EDEED8",
    greenTea = "#DCDEB1",
    springGreen = "#B6B77E",
    oliveGreen = "#8C8B50",
    mossGreen = "#73713F",
    oreganoGreen = "#616034"
}
export declare const GreenTonesHtml: string;
export type GreenTones = keyof typeof GreenTonesEnum;
export declare enum DarkGrayTonesEnum {
    grey55 = "#8C8C8C",
    grey45 = "#747474",
    grey35 = "#595959",
    grey25 = "#404040",
    grey15 = "#262626",
    grey10 = "#1A1A1A",
    black = "#000000"
}
export declare const DarkGrayTonesHtml: string;
export type DarkGrayTones = keyof typeof DarkGrayTonesEnum;
export declare enum BrightGrayTonesEnum {
    grey99 = "#FCFCFC",
    grey98 = "#FAFAFA",
    grey96 = "#F5F5F5",
    grey91 = "#E8E8E8",
    grey86 = "#DBDBDB",
    grey76 = "#C2C2C2",
    grey62 = "#9E9E9E"
}
export declare const BrightGrayTonesHtml: string;
export type BrightGrayTones = keyof typeof BrightGrayTonesEnum;
export declare enum SignalScaleTonesEnum {
    whisperCoral = "#FFD5BD",
    coralOrange = "#FF9C6B",
    signalOrange = "#EB6E3D",
    intenseOrange = "#B24319",
    hotOrange = "#993012",
    redWine = "#7A240C"
}
export declare const SignalScaleTonesHtml: string;
export type SignalScaleTones = keyof typeof SignalScaleTonesEnum;
export declare enum WhiteEnum {
    white = "#fff"
}
export declare const WhiteHtml: string;
export type White = keyof typeof WhiteEnum;
export declare enum StandardColorsEnum {
    black = "#000000",
    lavender = "#5B5FFF",
    white = "#fff"
}
export declare const StandardColorsHtml: string;
export type StandardColors = keyof typeof StandardColorsEnum;
export declare enum SecondaryColorsEnum {
    sunYellow = "#E6C669",
    caramelBrown = "#D3924E",
    papayaOrange = "#E07B4C",
    eveningTaupe = "#BA7F6B",
    petitePink = "#E39994",
    springGreen = "#B6B77E"
}
export declare const SecondaryColorsHtml: string;
export type SecondaryColors = keyof typeof SecondaryColorsEnum;
export declare enum IndicationColorsEnum {
    inidiaicationRed = "#EB6E3D",
    indicationGreen = "#B6B77E"
}
export declare const IndicationColorsHtml: string;
export type IndicationColors = keyof typeof IndicationColorsEnum;
export type Colors = BlueTones | YellowTones | OrangeTones | TaupeTones | PinkTones | BrownTones | GreenTones | SignalScaleTones | BrightGrayTones | DarkGrayTones | StandardColors;
export declare const getHexColor: (colorName: Colors) => DarkGrayTonesEnum | BlueTonesEnum | WhiteEnum.white | YellowTonesEnum | BrownTonesEnum | OrangeTonesEnum.cantaloupeOrange | OrangeTonesEnum.papayaOrange | OrangeTonesEnum.fireOrange | OrangeTonesEnum.burntOrange | OrangeTonesEnum.rustRed | TaupeTonesEnum | PinkTonesEnum | GreenTonesEnum | SignalScaleTonesEnum | BrightGrayTonesEnum;
