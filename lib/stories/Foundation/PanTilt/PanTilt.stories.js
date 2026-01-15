"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Grid_1 = require("../Grid");
const _1 = require(".");
const Slider_1 = require("../Slider");
const IconButton_1 = require("../IconButton");
const havre_1 = require("src/frokost/havre");
exports.default = { component: _1.PanTilt };
const Primary = () => {
    const updatePosition = (x, y) => {
        console.log(x, y);
    };
    const zoomMin = 0;
    const zoomMax = 1;
    const [zoom, setZoom] = (0, react_1.useState)(zoomMin);
    const onZoom = (value) => {
        setZoom(value);
    };
    const zoomOut = () => {
        const value = Math.max(zoomMin, zoom - 0.1);
        setZoom(value);
    };
    const zoomIn = () => {
        const value = Math.min(zoomMax, zoom + 0.1);
        setZoom(value);
    };
    return ((0, jsx_runtime_1.jsxs)(Grid_1.Grid, Object.assign({ alignItems: 'start', columns: '320px 290px', columnGap: '4' }, { children: [(0, jsx_runtime_1.jsx)(_1.PanTilt, { updatePosition: updatePosition, zoom: zoom, width: 320 }), (0, jsx_runtime_1.jsxs)("nav", { children: [(0, jsx_runtime_1.jsx)(IconButton_1.IconButton, { icon: havre_1.Plus, onClick: zoomIn }), (0, jsx_runtime_1.jsx)(Slider_1.Slider, { min: zoomMin, max: zoomMax, value: zoom, onChange: onZoom, resolution: 0.1, vertical: true, length: 195 }), (0, jsx_runtime_1.jsx)(IconButton_1.IconButton, { icon: havre_1.Minus, onClick: zoomOut })] })] })));
};
exports.Primary = Primary;
//# sourceMappingURL=PanTilt.stories.js.map