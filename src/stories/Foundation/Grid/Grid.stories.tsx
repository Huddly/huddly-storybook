import { Grid } from '.';
import React from 'react';
import { GridItem } from '../GridItem';

export default { component: Grid };

const placeholderStyles = {
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-lavender)',
};

export const Grid2x2 = {
    args: {
        children: (
            <>
                <div style={placeholderStyles}>1</div>
                <div style={placeholderStyles}>2</div>
                <div style={placeholderStyles}>3</div>
                <div style={placeholderStyles}>4</div>
            </>
        ),
        columnGap: 16,
        rowGap: 16,
        columns: '200px 200px',
        rows: '200px 200px',
        alignItems: 'stretch',
        justifyItems: 'stretch',
    },
};

const boxStyle = {
    height: '100%',
    width: '100%',
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-lavender)',
};

export const GridWithGridItems = {
    args: {
        children: (
            <>
                <GridItem alignSelf='start' justifySelf='start'>
                    <div style={boxStyle}>Start aligned</div>
                </GridItem>
                <GridItem alignSelf='end' justifySelf='end'>
                    <div style={boxStyle}>End aligned</div>
                </GridItem>
                <GridItem alignSelf='center' justifySelf='center'>
                    <div style={boxStyle}>Center aligned</div>
                </GridItem>
                <GridItem alignSelf='stretch' justifySelf='stretch'>
                    <div style={boxStyle}>Stretched</div>
                </GridItem>
                <GridItem
                    alignSelf='stretch'
                    justifySelf='stretch'
                    columnStart={3}
                    rowStart={3}
                >
                    <div style={boxStyle}>Placed in column 3 row 3</div>
                </GridItem>
            </>
        ),
        rowGap: 16,
        columns: '150px 150px 150px 150px',
        rows: '150px 150px 150px 150px',
        alignItems: 'stretch',
        justifyItems: 'stretch',
    },
};
