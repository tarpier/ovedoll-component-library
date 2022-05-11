import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProfileText } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/ProfileText',
  component: ProfileText
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ProfileText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileText> = (args) => <ProfileText {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  profilePicture: {
    src: 'https://res.cloudinary.com/tarpier/image/upload/w_337,h_450/v1639264609/ovedoll.de/ove-1_vocqmq.jpg',
    alt: 'Freelance Next.js Developer Ove Doll'
  },
  copy: `
  ## Freelance Frontend Developer

I’m a senior Frontend Developer with over 10 years of experience working on big corporate Projects as well as fast paced agency clients. I help companies, brands and agencies build digital products. 

I will help you build:
- A fast and secure Jamstack website that is build using a static site generator like Next.js or Gatsby.
- A well structured headless CMS which integrates seamlessly your website or app. My preference here is a CMS like Sanity.io or Strapi.

I can also provide technical consultation on an existing or planned project, to improve code quality, website performance and your SEO score.
  `,
  dateLine: 'Hire me'
};
