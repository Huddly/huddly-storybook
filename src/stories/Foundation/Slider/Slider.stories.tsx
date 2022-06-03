import { useState } from 'react';
import styled from 'styled-components';
import { Slider } from '.';

const Wrapper = styled.div`
  width: 400px;
`;

const VerticalWrapper = styled.div`
  width: 400px;
`;

export default { component: Slider };

export const Horizontal = () => {
  const [value, setValue] = useState(0);
  const onChange = (value: number) => {
    setValue(value);
  };
  return (
    <Wrapper>
      <Slider
        min={0}
        max={100}
        vertical={false}
        value={value}
        length={250}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export const Vertical = () => {
  const [value, setValue] = useState(0);
  const onChange = (value: number) => {
    setValue(value);
  };
  return (
    <>
      <VerticalWrapper>
        <Slider
          min={0}
          max={100}
          length={250}
          vertical={true}
          value={value}
          onChange={onChange}
        />
      </VerticalWrapper>
    </>
  );
};
