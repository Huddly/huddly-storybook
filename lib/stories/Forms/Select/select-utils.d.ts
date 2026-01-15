import React from 'react';
export declare const allChildrenAreOption: (children: React.ReactNode) => boolean;
export declare const getSelectListHeight: (showMaxItems: number, selectListRef: React.RefObject<HTMLUListElement>) => number;
export declare const handleSelectHoverBackground: (selectListRef: React.RefObject<HTMLUListElement>, selectListHoverBackgroundRef: React.RefObject<HTMLSpanElement>) => () => void;
export declare const filterChildrenByQuery: (children: React.ReactNode, query: string) => React.ReactNode;
export declare const getSelectedContentHTML: (children: React.ReactNode, selected: string[]) => any;
