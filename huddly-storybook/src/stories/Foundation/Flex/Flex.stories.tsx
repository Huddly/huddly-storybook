import { Flex } from '.';

export default { component: Flex };

export const FlexComponent = {
    args: {
        columnGap: 16,
        children: (
            <>
                <div>block 1</div>
                <div>block 2</div>
                <div>block 3</div>
            </>
        ),
        rowGap: 16,
        direction: 'column',
    },
};
