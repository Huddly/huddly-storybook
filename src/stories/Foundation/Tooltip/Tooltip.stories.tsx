import { useState } from 'react';
import styled from 'styled-components';
import { Tooltip } from '.';
import { Button } from '../../Forms/Button';

export default { component: Tooltip };

const Wrapper = styled.div`
  display: flex;
  margin-top: var(--spacing-48);
  justify-content: center;
`;

const Template = ({ alignX, alignY }) => {
  const [veryCount, setVeryCount] = useState(1);

  const getTooltipText = () => {
    const veryStr = Array(veryCount).fill('very').join(' ');
    return `A ${veryStr} cool tooltip! ✨`;
  };

  const addVery = () => {
    setVeryCount(veryCount + 1);
  };

  const tooltipText = getTooltipText();
  return (
    <Wrapper>
      <Tooltip text={tooltipText} alignX={alignX} alignY={alignY}>
        <Button onClick={addVery}>dddd</Button>
      </Tooltip>
    </Wrapper>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  alignX: 'center',
  alignY: 'top',
};
