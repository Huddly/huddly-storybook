/// <reference types="react" />
import { Ordering } from '../../../shared/types';
interface Props {
    ordering: Ordering;
    columnKey: string;
    header: string;
    index: number;
    align?: 'left' | 'right' | 'center';
    width?: string;
    isCheckable?: boolean;
    onClickHeader?: () => void;
    isSortable?: boolean;
    setOrdering: (ordering: Ordering) => void;
}
declare const TableHeaderItem: ({ ordering, columnKey, header, align, width, isSortable, setOrdering, index, }: Props) => JSX.Element;
export default TableHeaderItem;
