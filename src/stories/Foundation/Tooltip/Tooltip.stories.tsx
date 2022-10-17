import { useState } from 'react';
import styled from 'styled-components';
import { Tooltip } from '.';
import { Button } from '../../Forms/Button';

export default { component: Tooltip };

const Wrapper = styled.div<{ pushOutOfBounds: boolean }>`
  display: flex;
  justify-content: center;
  margin-top: ${(p) => (p.pushOutOfBounds ? '0' : 'var(--spacing-48)')};
`;

const Template = ({ align, pushOutOfBounds = true }) => {
  const [veryCount, setVeryCount] = useState(1);

  const getRandomMore = () => {
    const very = ['More', 'Much', 'So much', 'Very much', 'Moaaarr'];
    return very[Math.floor(Math.random() * very.length)];
  };

  const getTooltipText = () => {
    const veryStr = Array(veryCount).fill('very').join(' ');
    return `A ${veryStr} cool tooltip! ✨`;
  };

  const addVery = () => {
    setVeryCount(veryCount + 1);
  };

  const tooltipText = getTooltipText();
  const buttonText = getRandomMore();
  return (
    <Wrapper pushOutOfBounds={pushOutOfBounds}>
      <Tooltip text={tooltipText} align={align}>
        <Button onClick={addVery}>{buttonText} very</Button>
      </Tooltip>
    </Wrapper>
  );
};

export const Left = Template.bind({});
Left.args = {
  align: 'left',
};

export const Center = Template.bind({});
Center.args = {
  align: 'center',
};

export const Right = Template.bind({});
Right.args = {
  align: 'right',
};

export const OutOfBounds = Template.bind({});
OutOfBounds.args = {
  pushOutOfBounds: true,
};
