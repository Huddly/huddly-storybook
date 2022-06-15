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

const RedWrapper = styled.div`
  background: var(--color-lavender);
  margin-top: var(--spacing-32);
  width: 200px;
`;

const StyledTip = styled(Tooltip)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const StretchedTemplate = () => {
  return (
    <RedWrapper>
      <StyledTip text='Click me'>
        <StyledButton onClick={() => console.log('click')}>Button</StyledButton>
      </StyledTip>
    </RedWrapper>
  );
};

export const Stretched = StretchedTemplate.bind({});
