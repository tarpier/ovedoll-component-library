import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HorizontalVideoLink } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/HorizontalVideoLink',
  component: HorizontalVideoLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof HorizontalVideoLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HorizontalVideoLink> = (args) => <HorizontalVideoLink {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  poster: { imgSrc: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260', imgAlt: '' },
  dateLine: 'brand new',
  headline: 'The quick, brown fox jumps over a lazy dog',
  paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.',
  videoHref: '/'
};
