import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SimpleHeader } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Header/SimpleHeader',
  component: SimpleHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof SimpleHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleHeader> = (args) => <SimpleHeader {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  dateLine: 'Ove Doll',
  headline: 'Freelance Frontend Developer',
  paragraph: 'I build fast and secure websites for your online business.',
};

export const ReactVersion = Template.bind({});
ReactVersion.args = {
  dateLine: 'Ove Doll',
  headline: 'Freelance Frontend Developer',
  paragraph: "I'm a freelance Frontend Developer specialized in building fast and secure websites with Next.js.",
};
