import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

import { SimpleThreeColumn } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/Feature/Simple Three Column',
  component: SimpleThreeColumn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof SimpleThreeColumn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleThreeColumn> = (args) => <SimpleThreeColumn {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  headline: 'Frontend Developer',
features: [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
]
};

export const Jamstack = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Jamstack.args = {
  headline: 'Frontend Developer',
features: [
  {
    name: 'Super-fast websites.',
    description:
      "Your website is an important part of your business. Why not make it a fast one? For blazing-fast performance, no database means no time-consuming queries on every request. Get your Jamstack website started today!",
    icon: GlobeAltIcon,
  },
  {
    name: 'The best of both worlds.',
    description:
      "If you're looking for the best of both worlds, going static is the way to go. Static sites offer better performance therefore more search engine ranking capabilities, which can lead to higher conversions and lower customer acquisition costs. Jamstack websites are a new first-class web development solution that allow you to take advantage of the best features of both worlds—dynamic content on a static site.",
    icon: ScaleIcon,
  },
  {
    name: 'Static websites with no plugins or databases are like a fortress',
    description:
      " Static websites are more secure and reliable. No plugins, databases, or hidden code means your website is free from hackers and data breaches. Our static Jamstack websites with a robust build process take care of the heavy lifting for you so you don’t have to worry about it.",
    icon: LightningBoltIcon,
  },
]
};