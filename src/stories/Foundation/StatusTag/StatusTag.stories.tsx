import { Flex } from '../Flex';
import { StatusTag } from '.';

export default { component: StatusTag };

const OverviewTemplate = () => {
  return (
    <Flex direction='column' rowGap={24} align='flex-start'>
      <StatusTag severity='warning'>Warning status</StatusTag>
      <StatusTag severity='error'>Error status</StatusTag>
      <StatusTag severity='success'>Success status</StatusTag>
      <StatusTag severity='neutral'>Neutral status</StatusTag>
      <StatusTag severity='info'>Info status</StatusTag>
    </Flex>
  );
};

export const Overview = OverviewTemplate.bind({});
Overview.args = {};
