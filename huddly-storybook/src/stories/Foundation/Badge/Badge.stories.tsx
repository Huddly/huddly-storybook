import { Badge } from '.';
import { Flex } from '../Flex';
import { Text } from '../Text';

export default { component: Badge };

export const Primary = {
    args: {
        children: 'Badge',
    },
};

export const TitleExample = () => {
    return (
        <Flex align='center' columnGap={8}>
            <Text type='h2' size='28'>
                Huddly L1
            </Text>
            <Badge>New</Badge>
        </Flex>
    );
};
