"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const Text_1 = require("../Text");
const pxToRem_1 = __importDefault(require("../../../shared/pxToRem"));
const alignments_1 = require("./alignments");
const Wrapper = styled_components_1.default.div `
  position: relative;
  display: inline-block;
`;
const ToolTipWrapper = styled_components_1.default.div `
  --gap: ${(0, pxToRem_1.default)(10)};
  display: flex;
  visibility: ${(p) => (p.visible ? 'visible' : 'hidden')};
  position: absolute;
  align-items: center;
  width: clamp(1rem, 80vw, 25rem);
  max-width: max-content;
  // Get alignment from map
  ${(p) => alignments_1.alignMap[p.alignY][p.alignX]}

  // Tooltip arrow
  &:before {
    --height: ${(0, pxToRem_1.default)(8)};
    position: absolute;
    width: 0;
    height: 0;
    border-width: ${(0, pxToRem_1.default)(8)} ${(0, pxToRem_1.default)(6.5)} 0 ${(0, pxToRem_1.default)(6.5)};
    border-style: solid;
    border-color: var(--color-black) transparent transparent transparent;
    content: '';
    margin-inline: ${(p) => p.alignY === 'center' && 'calc(var(--height) * -1)'};
    // Get alignment from arrow-map
    ${(p) => alignments_1.arrowAlignMap[p.alignY][p.alignX]}
  }
`;
const ToolTipText = (0, styled_components_1.default)(Text_1.Text) `
  position: relative;
  background: var(--color-black);
  padding: ${(0, pxToRem_1.default)(6)} ${(0, pxToRem_1.default)(12)};
  border-radius: ${(0, pxToRem_1.default)(3)};
  width: 100%;
`;
/**
 * Tooltip component
 */
const Tooltip = ({ children, className, text, alignX = 'center', alignY = 'top', }) => {
    // alignX and alignY cannot be both 'center'
    if (alignX === 'center' && alignY === 'center') {
        alignY = 'top';
        console.warn('Tooltip: alignX and alignY cannot be both "center". alignY has been set to "top".');
    }
    const tooltipId = (0, react_1.useId)();
    const tooltipRef = (0, react_1.useRef)(null);
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    const [localAlignX, setLocalAlignX] = (0, react_1.useState)(alignX);
    const [localAlignY, setLocalAlignY] = (0, react_1.useState)(alignY);
    const handleAlignReset = (0, react_1.useCallback)(() => {
        setLocalAlignX(alignX);
        setLocalAlignY(alignY);
    }, [alignX, alignY]);
    const handleAlignIfOutOfViewport = () => {
        // Check if tooltip is outside of viewport
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        // When alignY is center, the tooltip is displayed inline with the trigger
        const inline = localAlignY === 'center';
        // If inline and aout of bounds then set localAlignX to center
        if (inline && (tooltipRect.top < 0 || tooltipRect.bottom > window.innerHeight)) {
            setLocalAlignX('center');
        }
        if (tooltipRect.top < 0) {
            setLocalAlignY('bottom');
        }
        else if (tooltipRect.bottom > window.innerHeight) {
            setLocalAlignY('top');
        }
        if (tooltipRect.left < 0) {
            setLocalAlignX(inline ? 'right' : 'left');
        }
        else if (tooltipRect.right > window.innerWidth) {
            setLocalAlignX(inline ? 'left' : 'right');
        }
    };
    (0, react_1.useEffect)(() => {
        if (!tooltipRef.current)
            return;
        const wrapper = tooltipRef.current.parentElement;
        let enterTimeout;
        let leaveTimeout;
        const mouseEnter = () => {
            leaveTimeout ? clearTimeout(leaveTimeout) : handleAlignIfOutOfViewport();
            enterTimeout = setTimeout(() => {
                setIsVisible(true);
            }, 200);
        };
        const touchEnter = () => {
            leaveTimeout ? clearTimeout(leaveTimeout) : handleAlignIfOutOfViewport();
            setIsVisible(true);
        };
        const reset = () => {
            clearTimeout(enterTimeout);
            leaveTimeout = setTimeout(() => {
                leaveTimeout = undefined;
                handleAlignReset();
                setIsVisible(false);
            }, 200);
        };
        // Mouse events
        wrapper.addEventListener('mouseenter', mouseEnter);
        wrapper.addEventListener('mouseleave', reset);
        // Touch events
        wrapper.addEventListener('touchstart', touchEnter);
        wrapper.addEventListener('touchend', reset);
        return () => {
            // Mouse events
            wrapper.removeEventListener('mouseenter', mouseEnter);
            wrapper.removeEventListener('mouseleave', reset);
            // Touch events
            wrapper.removeEventListener('touchstart', touchEnter);
            wrapper.removeEventListener('touchend', reset);
        };
    }, [text, children, localAlignX, localAlignY]);
    return ((0, jsx_runtime_1.jsxs)(Wrapper, Object.assign({ className: className, role: 'tooltip' }, { children: [(0, jsx_runtime_1.jsx)(ToolTipWrapper, Object.assign({ alignX: localAlignX, alignY: localAlignY, "aria-hidden": !isVisible, id: tooltipId, ref: tooltipRef, role: 'tooltip', visible: isVisible }, { children: (0, jsx_runtime_1.jsx)(ToolTipText, Object.assign({ color: 'white' }, { children: text })) })), (0, jsx_runtime_1.jsx)("span", Object.assign({ "aria-describedby": tooltipId }, { children: children }))] })));
};
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map