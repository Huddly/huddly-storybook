/// <reference types="react" />
declare const _default: {
    component: (props: import("./index").ButtonGroupProps) => JSX.Element;
};
export default _default;
export declare const Horizontal: {
    args: {
        children: JSX.Element;
        align: string;
        vertical: boolean;
    };
    argTypes: {
        align: {
            options: string[];
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export declare const Vertical: {
    args: {
        align: string;
        vertical: boolean;
        children: JSX.Element;
    };
    argTypes: {
        align: {
            options: string[];
            description: string;
            control: {
                type: string;
            };
        };
    };
};
