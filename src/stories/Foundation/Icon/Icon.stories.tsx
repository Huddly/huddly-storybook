import React, { useState } from 'react';
import { Icon } from '.';
import * as icons from './components';
import { IconDisplay } from '../../Storybook/IconDisplay';
import { Flex, InputWrapper, Label, Input } from '../../../index';

export default {
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: 'hidden',
      },
    },
  },
};

const OverviewTemplate = ({ color }) => {
  const initialIcons: Array<keyof typeof icons> = Object.keys(icons).sort() as Array<
    keyof typeof icons
  >;
  const [iconResults, setIconResults] = useState(initialIcons);

  const filter = (e) => {
    const value = e.target.value;
    const filteredIcons = initialIcons.filter((icon) =>
      icon.toLowerCase().includes(value.toLowerCase())
    );
    setIconResults(filteredIcons);
  };

  return (
    <>
      <InputWrapper id='search' isRequired>
        <Label>Filter icons</Label>
        <Input placeholder='Search ...' onChange={filter} />
      </InputWrapper>

      <Flex columnGap={24} rowGap={16} wrap='wrap'>
        {iconResults.map((name) => (
          <IconDisplay key={name} label={name} darkBg={color === 'white'}>
            <Icon name={name} color={color} />
          </IconDisplay>
        ))}
      </Flex>
    </>
  );
};

export const Overview = OverviewTemplate.bind({});
Overview.args = {
  color: 'black',
};
