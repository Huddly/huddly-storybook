import { ChevronDown } from 'src/frokost/havre';
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SelectButton: import("styled-components").StyledComponent<"button", any, {
    isOpen: boolean;
    hasLabel: boolean;
    hasError: boolean;
}, never>;
/**
 * The selected content inside the SelectButton.
 */
export declare const SelectedContent: import("styled-components").StyledComponent<"span", any, {
    hasNestedContent: boolean;
}, never>;
export declare const RotatingChevron: import("styled-components").StyledComponent<"span", any, {
    rotate: boolean;
}, never>;
export { ChevronDown };
export declare const FilterSearch: import("styled-components").StyledComponent<"input", any, {}, never>;
export declare const SelectListWrapper: import("styled-components").StyledComponent<"div", any, {
    height: number;
    isOpen: boolean;
    placeOver: boolean;
}, never>;
export declare const SelectList: import("styled-components").StyledComponent<"ul", any, {
    height: number;
}, never>;
/**
 * Shows up then there are no options to select.
 */
export declare const SelectListNoResults: import("styled-components").StyledComponent<"div", any, {}, never>;
/**
 * Used to animate the hover background color of the select list items.
 * It moves with the mouse cursor/focus.
 */
export declare const SelectListHoverBackground: import("styled-components").StyledComponent<"span", any, {}, never>;
