import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Copy } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/Copy',
  component: Copy,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Copy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Copy> = (args) => <Copy {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  headline: 'Frontend Developer',
  copy: 'Hey I’m Ove, fullstack developer specialized in frontend development, based in Hamburg, Germany. I am especially interested in the JAMStack and the whole ecosystem around it. \n\n I help companies, brands and agencies build digital products. This could mean building a website to attract new clients, running a fast and SEO friendly online shop or developing a solution for your specific needs. \n\n I would love to help you or your clients achieve more.',
};

export const Services = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Services.args = {
  dateLine: 'Services',
  headline: 'How can I help your Project as a Freelance Frontend Developer',
  copy: `
  As senior Frontend Developer I have specialised in React as a framework and work a lot in the Jamstack context. This means building very fast static sites that are enhanced through serverless functions to deliver the best in class performance and flexibility. 

Common scenarios where I deliver successful projects:
1.  You are planning a new project and require technical advice on the frontend architecture.
2. Your team needs a freelance Frontend Developer to support and create deliverables.
3. Your design and UX is finished and you need a freelance Frontend Engineer to build the UI components or a full fledged UI / Design system.
4. You wish to integrate ecommerce capabilities to an existing site or start a new headless Shopify project.
5. Your website needs a content management system and you want to add a modern headless CMS.
6. Your website does not perform as intended and needs to be audited to identify areas that can be improved upon. I will look at all technical aspects including but not limited to responsive behaviour, speed and loading kpis,  on-page SEO factors and many more.

Does one or more cases sound familiar, do reach out and let us discuss how I can advice on your project.

  `
};
