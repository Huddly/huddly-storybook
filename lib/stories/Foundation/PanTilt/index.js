"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanTilt = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const colors_1 = require("../../../shared/colors");
const Arrows_1 = __importDefault(require("./Arrows"));
const Wrapper = styled_components_1.default.div `
  background: var(--color-grey91);
  width: ${(p) => (0, pxToRem_1.default)(p.width)};
  height: ${(p) => (0, pxToRem_1.default)(p.height)};
  border-radius: var(--spacing-8);
`;
const StyledRect = styled_components_1.default.rect `
  cursor: move;
`;
/**
 * PanTilt component
 * - The zoom values should be between 0 and 1
 * - The pan and tilt values are between -1 and 1
 */
const PanTilt = ({ className, updatePosition, zoom, width, initialPositionPan, initialPositionTilt, }) => {
    const refRectangle = react_1.default.createRef();
    // scale will be between 0.3 and 1, smaller than 0.3 will render to small to show arrows
    const scale = 1 - 0.7 * zoom;
    const [isDragging, setIsDragging] = (0, react_1.useState)(false);
    // grey wrapper sizes
    const wrapperFormat = 3 / 4;
    const wrapperWidth = width;
    const wrapperHeight = width * wrapperFormat;
    const wrapperCenterX = width / 2;
    const wrapperCenterY = wrapperHeight / 2;
    // lavender rectangle sizes
    const rectangleFormat = 9 / 16;
    const rectangleWidth = width * scale;
    const rectangleHeight = width * scale * rectangleFormat;
    const rectangleCenterX = rectangleWidth / 2;
    const rectangleCenterY = rectangleHeight / 2;
    const convertToRange = ([oldMin, oldMax], value, [newMin, newMax]) => {
        const oRange = oldMax - oldMin;
        const nRange = newMax - newMin;
        return ((value - oldMin) * nRange) / oRange + newMin;
    };
    const xRange = [rectangleCenterX, wrapperWidth - rectangleCenterX];
    const yRange = [rectangleCenterY, wrapperHeight - rectangleCenterY];
    const convertXToPan = (xValue) => convertToRange(xRange, xValue, [-1, 1]);
    const convertYToTilt = (yValue) => convertToRange(yRange, yValue, [-1, 1]);
    const convertPanToX = (panValue) => convertToRange([-1, 1], panValue, xRange);
    const convertTiltToY = (tiltValue) => convertToRange([-1, 1], tiltValue, yRange);
    const [position, setPosition] = (0, react_1.useState)({
        x: initialPositionPan ? convertPanToX(initialPositionPan) : wrapperCenterX,
        y: initialPositionTilt ? convertTiltToY(initialPositionTilt) : wrapperCenterY,
    });
    (0, react_1.useEffect)(() => {
        // contains rectangle inside wrapper when scaling
        const minX = Math.max(rectangleCenterX, position.x);
        const minY = Math.max(rectangleCenterY, position.y);
        const x = Math.min(wrapperWidth - rectangleCenterX, minX);
        const y = Math.min(wrapperHeight - rectangleCenterY, minY);
        setPosition({ x, y });
    }, [scale]);
    const startDrag = () => setIsDragging(true);
    const endDrag = () => {
        setIsDragging(false);
        // normalize values between -1 and 1
        // -1 is the value furthest to the left and top the rectangle can move, considering the zoom level
        // 1 is the value furthest to the right and bottom the rectangle can move, considering the zoom level
        const panValue = convertXToPan(position.x);
        const tiltValue = convertYToTilt(position.y);
        updatePosition(panValue, tiltValue);
    };
    const drag = (e) => {
        e.stopPropagation();
        if (isDragging) {
            // getScreenCTM returns Current Transform Matrix that converts screen coordinate system to RECT coordinate system
            const CTM = refRectangle.current.getScreenCTM();
            // positions the cursor at the top left corner of the rectangle
            const cursorPositionX = (e.clientX - CTM.e) / CTM.a;
            const cursorPositionY = (e.clientY - CTM.f) / CTM.d;
            // positions the cursor at the center of the rectangle
            const cursorPositionCenterX = cursorPositionX;
            const cursorPositionCenterY = cursorPositionY;
            // contains rectangle inside wrapper
            const minX = Math.max(rectangleCenterX, cursorPositionCenterX);
            const minY = Math.max(rectangleCenterY, cursorPositionCenterY);
            const x = Math.min(wrapperWidth - rectangleCenterX, minX);
            const y = Math.min(wrapperHeight - rectangleCenterY, minY);
            setPosition({
                x,
                y,
            });
        }
    };
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ className: className, width: wrapperWidth, height: wrapperHeight }, { children: (0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: wrapperWidth, height: wrapperHeight, onMouseDown: startDrag, onMouseUp: endDrag, onMouseLeave: endDrag, onMouseMove: drag }, { children: [(0, jsx_runtime_1.jsx)(StyledRect, { ref: refRectangle, rx: 8, x: position.x - rectangleCenterX, y: position.y - rectangleCenterY, width: rectangleWidth, height: rectangleHeight, fill: colors_1.BlueTonesEnum.lavender }), (0, jsx_runtime_1.jsx)(Arrows_1.default, { x: position.x, y: position.y, scale: scale })] })) })));
};
exports.PanTilt = PanTilt;
//# sourceMappingURL=index.js.map