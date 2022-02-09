import { Flex } from '.';

export default { component: Flex };

const placeholderStyles = {
    display: 'grid',
    width: '100px',
    height: '100px',
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-lavender)',
    placeItems: 'center',
};

export const DirectionRow = {
    args: {
        children: (
            <>
                <div style={placeholderStyles}>1</div>
                <div style={placeholderStyles}>2</div>
                <div style={placeholderStyles}>3</div>
            </>
        ),
        columnGap: 16,
        direction: 'row',
    },
};

export const DirectionColumn = {
    args: {
        children: (
            <>
                <div style={placeholderStyles}>1</div>
                <div style={placeholderStyles}>2</div>
                <div style={placeholderStyles}>3</div>
            </>
        ),
        rowGap: 16,
        direction: 'column',
    },
};
