import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateLine } from './index';

export default {
  title: 'UNSORTED/DateLine',
  component: DateLine,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof DateLine>;

const Template: ComponentStory<typeof DateLine> = (args) => <DateLine {...args} />;

export const Default = Template.bind({});

Default.args = {
  headline: 'hello from'
};
