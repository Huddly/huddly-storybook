import { Badge } from '.';
import { Text, Flex } from '../../../index';

export default { component: Badge };

/**
 * This is the default story.
 * It renders the Badge, and that's about it.
 */
export const Primary = {
  args: {
    children: 'Badge',
  },
};

/**
 * This is an example of a badge used with a title.
 */
const TitleExampleTemplate = ({ children }) => {
  return (
    <Flex align='center' columnGap={8}>
      <Text type='h2' size='28'>
        Huddly L1
      </Text>
      <Badge>{children}</Badge>
    </Flex>
  );
};

export const TitleExample = TitleExampleTemplate.bind({});
TitleExample.args = {
  children: 'New',
};
