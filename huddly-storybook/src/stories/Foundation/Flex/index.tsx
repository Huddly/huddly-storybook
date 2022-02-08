import React from 'react';
import styled from 'styled-components';
import { Spacing8 } from '../../../shared/types';

interface Props {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-revers';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justify?:
        | 'flex-start'
        | 'flex-end'
        | 'center'
        | 'space-between'
        | 'space-around'
        | 'space-evenly';
    align?:
        | 'flex-start'
        | 'flex-end'
        | 'stretch'
        | 'center'
        | 'space-between'
        | 'space-around';
    rowGap?: Spacing8;
    columnGap?: Spacing8;
    children: JSX.Element | JSX.Element[];
}

const Wrapper = styled.div<Props>`
    display: flex;
    flex-direction: ${(p) => p.direction};
    flex-wrap: ${(p) => p.wrap};
    align-items: ${(p) => p.align};
    justify-content: ${(p) => p.justify};
    row-gap: ${(p) => `var(--spacing-${p.rowGap})`};
    column-gap: ${(p) => `var(--spacing-${p.columnGap})`};
`;

/**
 * Flex component
 */
export const Flex = ({
    direction = 'row',
    wrap = 'nowrap',
    justify = 'flex-start',
    align = 'center',
    rowGap,
    columnGap,
    children,
}: Props) => {
    return (
        <Wrapper
            direction={direction}
            wrap={wrap}
            justify={justify}
            align={align}
            rowGap={rowGap}
            columnGap={columnGap}
        >
            {children}
        </Wrapper>
    );
};
