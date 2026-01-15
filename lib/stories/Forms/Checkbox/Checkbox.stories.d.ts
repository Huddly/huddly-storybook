/// <reference types="react" />
declare const _default: {
    component: import("react").ForwardRefExoticComponent<Pick<import(".").CheckboxProps, keyof import(".").CheckboxProps> & import("react").RefAttributes<HTMLInputElement>>;
};
export default _default;
export declare const Primary: {
    args: {
        id: string;
        children: JSX.Element;
        loading: boolean;
    };
};
export declare const Checked: {
    args: {
        checked: boolean;
        id: string;
        children: JSX.Element;
        loading: boolean;
    };
};
export declare const HasHint: any;
export declare const HasWarning: any;
export declare const HasError: any;
export declare const HasSuccess: any;
export declare const MultipleCheckboxes: any;
