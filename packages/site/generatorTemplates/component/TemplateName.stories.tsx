import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TemplateName } from './index';

export default {
  title: 'UNSORTED/TemplateName',
  component: TemplateName,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof TemplateName>;

const Template: ComponentStory<typeof TemplateName> = (args) => <TemplateName {...args} />;

export const Default = Template.bind({});

Default.args = {
  headline: 'hello from'
};
