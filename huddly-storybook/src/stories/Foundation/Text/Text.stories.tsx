import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "../Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const BlackText = Template.bind({});

BlackText.args = {
  color: "black",
};
