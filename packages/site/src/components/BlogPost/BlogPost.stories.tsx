import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BlogPost } from './index';

export default {
  title: 'UNSORTED/BlogPost',
  component: BlogPost,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof BlogPost>;

const Template: ComponentStory<typeof BlogPost> = (args) => <BlogPost {...args} />;

export const Default = Template.bind({});

Default.args = {
  headline: 'hello from'
};
