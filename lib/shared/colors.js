"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHexColor = exports.IndicationColorsHtml = exports.IndicationColorsEnum = exports.SecondaryColorsHtml = exports.SecondaryColorsEnum = exports.StandardColorsHtml = exports.StandardColorsEnum = exports.WhiteHtml = exports.WhiteEnum = exports.SignalScaleTonesHtml = exports.SignalScaleTonesEnum = exports.BrightGrayTonesHtml = exports.BrightGrayTonesEnum = exports.DarkGrayTonesHtml = exports.DarkGrayTonesEnum = exports.GreenTonesHtml = exports.GreenTonesEnum = exports.OrangeTonesHtml = exports.OrangeTonesEnum = exports.PinkTonesHtml = exports.PinkTonesEnum = exports.TaupeTonesHtml = exports.TaupeTonesEnum = exports.BrownTonesHtml = exports.BrownTonesEnum = exports.YellowTonesHtml = exports.YellowTonesEnum = exports.BlueTonesHtml = exports.BlueTonesEnum = void 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getColorHtml = (colors) => {
    return Object.entries(colors)
        .map(([key, value]) => `--color-${key}: ${value};`)
        .join('\n');
};
/* Blue Tones */
var BlueTonesEnum;
(function (BlueTonesEnum) {
    BlueTonesEnum["whisperBlue"] = "#E5EBFE";
    BlueTonesEnum["plumbagoBlue"] = "#A6B9FF";
    BlueTonesEnum["lavender"] = "#5B5FFF";
    BlueTonesEnum["salviaBlue"] = "#4B4FE3";
    BlueTonesEnum["royalBlue"] = "#393CBD";
    BlueTonesEnum["marineBlue"] = "#3032A6";
})(BlueTonesEnum = exports.BlueTonesEnum || (exports.BlueTonesEnum = {}));
exports.BlueTonesHtml = getColorHtml(BlueTonesEnum);
/* Yellow Tones */
var YellowTonesEnum;
(function (YellowTonesEnum) {
    YellowTonesEnum["whisperYellow"] = "#FFF6D4";
    YellowTonesEnum["cheesecakeYellow"] = "#FFEEA8";
    YellowTonesEnum["sunYellow"] = "#E6C669";
    YellowTonesEnum["dijonYellow"] = "#BF9A34";
    YellowTonesEnum["curryYellow"] = "#A17E25";
    YellowTonesEnum["autumnYellow"] = "#8A6A19";
})(YellowTonesEnum = exports.YellowTonesEnum || (exports.YellowTonesEnum = {}));
exports.YellowTonesHtml = getColorHtml(YellowTonesEnum);
/* Brown Tones */
var BrownTonesEnum;
(function (BrownTonesEnum) {
    BrownTonesEnum["whisperOrange"] = "#FBDFBC";
    BrownTonesEnum["apricotOrange"] = "#F7BF79";
    BrownTonesEnum["caramelBrown"] = "#D3924E";
    BrownTonesEnum["cinnamonBrown"] = "#9C6127";
    BrownTonesEnum["leatherBrown"] = "#87501C";
    BrownTonesEnum["chocolateBrown"] = "#6E4117";
})(BrownTonesEnum = exports.BrownTonesEnum || (exports.BrownTonesEnum = {}));
exports.BrownTonesHtml = getColorHtml(BrownTonesEnum);
/* Taupe Tones */
var TaupeTonesEnum;
(function (TaupeTonesEnum) {
    TaupeTonesEnum["whisperTaupe"] = "#F6DCD2";
    TaupeTonesEnum["macaronTaupe"] = "#EDBAA6";
    TaupeTonesEnum["eveningTaupe"] = "#BA7F6B";
    TaupeTonesEnum["clayTaupe"] = "#945441";
    TaupeTonesEnum["chestnutTaupe"] = "#804636";
    TaupeTonesEnum["rosewoodTaupe"] = "#69372A";
})(TaupeTonesEnum = exports.TaupeTonesEnum || (exports.TaupeTonesEnum = {}));
exports.TaupeTonesHtml = getColorHtml(TaupeTonesEnum);
/* Pink Tones */
var PinkTonesEnum;
(function (PinkTonesEnum) {
    PinkTonesEnum["whisperPink"] = "#FFE2DD";
    PinkTonesEnum["candyflossPink"] = "#FFC3BA";
    PinkTonesEnum["petitePink"] = "#E39994";
    PinkTonesEnum["balloonPink"] = "#BD5C57";
    PinkTonesEnum["passionPink"] = "#A84340";
    PinkTonesEnum["burntPink"] = "#94332F";
})(PinkTonesEnum = exports.PinkTonesEnum || (exports.PinkTonesEnum = {}));
exports.PinkTonesHtml = getColorHtml(PinkTonesEnum);
/* Orange Tones */
var OrangeTonesEnum;
(function (OrangeTonesEnum) {
    OrangeTonesEnum["whisperCoral"] = "#FFD5BD";
    OrangeTonesEnum["cantaloupeOrange"] = "#FFAE80";
    OrangeTonesEnum["papayaOrange"] = "#E07B4C";
    OrangeTonesEnum["fireOrange"] = "#B85227";
    OrangeTonesEnum["burntOrange"] = "#A3421C";
    OrangeTonesEnum["rustRed"] = "#8A3817";
})(OrangeTonesEnum = exports.OrangeTonesEnum || (exports.OrangeTonesEnum = {}));
exports.OrangeTonesHtml = getColorHtml(OrangeTonesEnum);
/* Green Tones */
var GreenTonesEnum;
(function (GreenTonesEnum) {
    GreenTonesEnum["whisperGreen"] = "#EDEED8";
    GreenTonesEnum["greenTea"] = "#DCDEB1";
    GreenTonesEnum["springGreen"] = "#B6B77E";
    GreenTonesEnum["oliveGreen"] = "#8C8B50";
    GreenTonesEnum["mossGreen"] = "#73713F";
    GreenTonesEnum["oreganoGreen"] = "#616034";
})(GreenTonesEnum = exports.GreenTonesEnum || (exports.GreenTonesEnum = {}));
exports.GreenTonesHtml = getColorHtml(GreenTonesEnum);
/* Dark gray Tones*/
var DarkGrayTonesEnum;
(function (DarkGrayTonesEnum) {
    DarkGrayTonesEnum["grey55"] = "#8C8C8C";
    DarkGrayTonesEnum["grey45"] = "#747474";
    DarkGrayTonesEnum["grey35"] = "#595959";
    DarkGrayTonesEnum["grey25"] = "#404040";
    DarkGrayTonesEnum["grey15"] = "#262626";
    DarkGrayTonesEnum["grey10"] = "#1A1A1A";
    DarkGrayTonesEnum["black"] = "#000000";
})(DarkGrayTonesEnum = exports.DarkGrayTonesEnum || (exports.DarkGrayTonesEnum = {}));
exports.DarkGrayTonesHtml = getColorHtml(DarkGrayTonesEnum);
/* Bright Gray Tones */
var BrightGrayTonesEnum;
(function (BrightGrayTonesEnum) {
    BrightGrayTonesEnum["grey99"] = "#FCFCFC";
    BrightGrayTonesEnum["grey98"] = "#FAFAFA";
    BrightGrayTonesEnum["grey96"] = "#F5F5F5";
    BrightGrayTonesEnum["grey91"] = "#E8E8E8";
    BrightGrayTonesEnum["grey86"] = "#DBDBDB";
    BrightGrayTonesEnum["grey76"] = "#C2C2C2";
    BrightGrayTonesEnum["grey62"] = "#9E9E9E";
})(BrightGrayTonesEnum = exports.BrightGrayTonesEnum || (exports.BrightGrayTonesEnum = {}));
exports.BrightGrayTonesHtml = getColorHtml(BrightGrayTonesEnum);
/* Signal scale tones */
var SignalScaleTonesEnum;
(function (SignalScaleTonesEnum) {
    SignalScaleTonesEnum["whisperCoral"] = "#FFD5BD";
    SignalScaleTonesEnum["coralOrange"] = "#FF9C6B";
    SignalScaleTonesEnum["signalOrange"] = "#EB6E3D";
    SignalScaleTonesEnum["intenseOrange"] = "#B24319";
    SignalScaleTonesEnum["hotOrange"] = "#993012";
    SignalScaleTonesEnum["redWine"] = "#7A240C";
})(SignalScaleTonesEnum = exports.SignalScaleTonesEnum || (exports.SignalScaleTonesEnum = {}));
exports.SignalScaleTonesHtml = getColorHtml(SignalScaleTonesEnum);
/* White */
var WhiteEnum;
(function (WhiteEnum) {
    WhiteEnum["white"] = "#fff";
})(WhiteEnum = exports.WhiteEnum || (exports.WhiteEnum = {}));
exports.WhiteHtml = getColorHtml(WhiteEnum);
/* Standard colors */
var StandardColorsEnum;
(function (StandardColorsEnum) {
    StandardColorsEnum["black"] = "#000000";
    StandardColorsEnum["lavender"] = "#5B5FFF";
    StandardColorsEnum["white"] = "#fff";
})(StandardColorsEnum = exports.StandardColorsEnum || (exports.StandardColorsEnum = {}));
exports.StandardColorsHtml = getColorHtml(StandardColorsEnum);
/* Secondary colors */
var SecondaryColorsEnum;
(function (SecondaryColorsEnum) {
    SecondaryColorsEnum["sunYellow"] = "#E6C669";
    SecondaryColorsEnum["caramelBrown"] = "#D3924E";
    SecondaryColorsEnum["papayaOrange"] = "#E07B4C";
    SecondaryColorsEnum["eveningTaupe"] = "#BA7F6B";
    SecondaryColorsEnum["petitePink"] = "#E39994";
    SecondaryColorsEnum["springGreen"] = "#B6B77E";
})(SecondaryColorsEnum = exports.SecondaryColorsEnum || (exports.SecondaryColorsEnum = {}));
exports.SecondaryColorsHtml = getColorHtml(SecondaryColorsEnum);
/* Indication colors */
var IndicationColorsEnum;
(function (IndicationColorsEnum) {
    IndicationColorsEnum["inidiaicationRed"] = "#EB6E3D";
    IndicationColorsEnum["indicationGreen"] = "#B6B77E";
})(IndicationColorsEnum = exports.IndicationColorsEnum || (exports.IndicationColorsEnum = {}));
exports.IndicationColorsHtml = getColorHtml(IndicationColorsEnum);
const ColorValues = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BlueTonesEnum), YellowTonesEnum), OrangeTonesEnum), TaupeTonesEnum), PinkTonesEnum), BrownTonesEnum), GreenTonesEnum), SignalScaleTonesEnum), BrightGrayTonesEnum), DarkGrayTonesEnum), WhiteEnum);
const getHexColor = (colorName) => ColorValues[colorName];
exports.getHexColor = getHexColor;
//# sourceMappingURL=colors.js.map