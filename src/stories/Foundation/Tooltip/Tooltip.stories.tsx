import { useState } from 'react';
import styled from 'styled-components';
import { Tooltip } from '.';
import { Button } from '../../Forms/Button';

export default { component: Tooltip };

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-32);
`;

const BasicTemplate = () => {
  const [veryCount, setVeryCount] = useState(1);

  const getRandomMore = () => {
    const very = ['More', 'Much', 'So much', 'Very much', 'Moaaarr'];
    return very[Math.floor(Math.random() * very.length)];
  };

  const getTooltipText = () => {
    const veryStr = Array(veryCount).fill('very').join(' ');
    return `A ${veryStr} cool tooltip.`;
  };

  const addVery = () => {
    setVeryCount(veryCount + 1);
  };

  const tooltipText = getTooltipText();
  const buttonText = getRandomMore();
  return (
    <Wrapper>
      <Tooltip text={tooltipText}>
        <Button onClick={addVery}>{buttonText} very</Button>
      </Tooltip>
    </Wrapper>
  );
};

export const Basic = BasicTemplate.bind({});
