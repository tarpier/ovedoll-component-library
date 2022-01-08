import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CustomerTagCloud } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/CustomerTagCloud',
  component: CustomerTagCloud,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof CustomerTagCloud>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomerTagCloud> = (args) => <CustomerTagCloud {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  dateLine: "I've proudly worked with",
  customerNames: ['Interone', 'BMW', 'Media Markt', 'For Sale Digital', 'Byteclub', 'Dreamlines', 'Die KOCHfabrik', 'Saturn', 'Cubic Transportation Systems', 'Deutsche Post Stiftung', 'Mercedes AMG', '... and others']
};


