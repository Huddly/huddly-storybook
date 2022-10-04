import styled from 'styled-components';
import { Grid } from '../Grid';
import { Text } from '../Text';
import { IconButton } from '.';
import { Edit } from '@huddly/frokost/havre';

export default { component: IconButton };

const Wrapper = styled(Grid)`
  padding: var(--spacing-8);
`;

const OverviewTemplate = (props) => {
  return (
    <Wrapper columnGap='32' rowGap='32' columns='50px 50px' justifyItems='center'>
      <Text size='18' bold>
        Button
      </Text>
      <Text size='18' bold>
        Loading
      </Text>
      <IconButton {...props} />
      <IconButton {...props} loading />
    </Wrapper>
  );
};

export const Overview = OverviewTemplate.bind({});

Overview.args = {
  icon: Edit,
  tooltipText: 'Edit',
};
