import React from 'react';
import styled from 'styled-components';
import { ColorBox } from '.';
import { Text } from '../Text';
import {
  YellowTonesEnum,
  BlueTonesEnum,
  PinkTonesEnum,
  BrightGrayTonesEnum,
  BrownTonesEnum,
  GreenTonesEnum,
  TaupeTonesEnum,
  OrangeTonesEnum,
  SignalScaleTonesEnum,
  DarkGrayTonesEnum,
  BlueTones,
  BrightGrayTones,
  BrownTones,
  DarkGrayTones,
  GreenTones,
  OrangeTones,
  PinkTones,
  SignalScaleTones,
  TaupeTones,
  YellowTones,
} from '../../../shared/colors';
import { Flex } from '../Flex';

export default {
  component: ColorBox,
};

const StyledColor = styled(ColorBox)`
  height: 150px;
  width: 150px;
  display: Flex;
  justify-content: center;
  align-items: center;
`;

const OverviewTemplate = () => {
  return (
    <Flex columnGap='4'>
      <Flex direction='column'>
        <Text size='16'>Blue Tones</Text>
        {Object.keys(BlueTonesEnum).map((key: BlueTones) => (
          <StyledColor key={key} color={key}>
            {key}
          </StyledColor>
        ))}
      </Flex>
      <Flex direction='column'>
        <Text size='16'>Yellow Tones</Text>
        {Object.keys(YellowTonesEnum).map((key: YellowTones) => (
          <StyledColor key={key} color={key}>
            {key}
          </StyledColor>
        ))}
      </Flex>
      <Flex direction='column'>
        <Text size='16'>Brown Tones</Text>
        {Object.keys(BrownTonesEnum).map((key: BrownTones) => (
          <StyledColor key={key} color={key}>
            {key}
          </StyledColor>
        ))}
      </Flex>
      <Flex direction='column'>
        <Text size='16'>Taupe Tones</Text>
        {Object.keys(TaupeTonesEnum).map((key: TaupeTones) => (
          <StyledColor key={key} color={key}>
            {key}
          </StyledColor>
        ))}
      </Flex>
      <Flex direction='column'>
        <Text size='16'>Pink Tones</Text>
        {Object.keys(PinkTonesEnum).map((key: PinkTones) => (
          <StyledColor key={key} color={key}>
            {key}
          </StyledColor>
        ))}
      </Flex>
      <Flex direction='column'>
        <Text size='16'>Orange Tones</Text>
        {Object.keys(OrangeTonesEnum).map((key: OrangeTones) => (
          <StyledColor key={key} color={key}>
            {key}
          </StyledColor>
        ))}
      </Flex>
      <Flex direction='column'>
        <Text size='16'>Green Tones</Text>
        {Object.keys(GreenTonesEnum).map((key: GreenTones) => (
          <StyledColor key={key} color={key}>
            {key}
          </StyledColor>
        ))}
      </Flex>
      <Flex direction='column'>
        <Text size='16'>Dark Gray Tones</Text>
        {Object.keys(DarkGrayTonesEnum).map((key: DarkGrayTones) => (
          <StyledColor key={key} color={key}>
            {key}
          </StyledColor>
        ))}
      </Flex>
      <Flex direction='column'>
        <Text size='16'>Bright Gray Tones</Text>
        {Object.keys(BrightGrayTonesEnum).map((key: BrightGrayTones) => (
          <StyledColor key={key} color={key}>
            {key}
          </StyledColor>
        ))}
      </Flex>
      <Flex direction='column'>
        <Text size='16'>Signal Scale Tones</Text>
        {Object.keys(SignalScaleTonesEnum).map((key: SignalScaleTones) => (
          <StyledColor key={key} color={key}>
            {key}
          </StyledColor>
        ))}
      </Flex>
    </Flex>
  );
};

export const Overview = OverviewTemplate.bind({});
Overview.args = {};
