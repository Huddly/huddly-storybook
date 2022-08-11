import styled from 'styled-components';
import { Tooltip } from '.';
import { Button } from '../../Forms/Button';

export default { component: Tooltip };

const Wrapper = styled.div`
  margin-top: var(--spacing-32);
`;

const BasicTemplate = () => {
  return (
    <Wrapper>
      <Tooltip text='Click me'>
        <Button onClick={() => console.log('click')}>Button</Button>
      </Tooltip>
    </Wrapper>
  );
};

export const Basic = BasicTemplate.bind({});
