/// <reference types="react" />
import { Direction } from '../../../shared/types';
interface Props {
    currentSorting: boolean;
    direction: Direction;
    onClick: () => void;
}
export declare const Carrot: ({ onClick, currentSorting, direction }: Props) => JSX.Element;
export {};
