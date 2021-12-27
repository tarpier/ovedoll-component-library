import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeadlineText } from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/HeadlineText',
  component: HeadlineText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof HeadlineText>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeadlineText> = (args) => <HeadlineText {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  headline: 'Frontend Developer',
  copy: 'Hey I’m Ove, fullstack developer specialized in frontend development, based in Hamburg, Germany. I am especially interested in the JAMStack and the whole ecosystem around it. \n\n I help companies, brands and agencies build digital products. This could mean building a website to attract new clients, running a fast and SEO friendly online shop or developing a solution for your specific needs. \n\n I would love to help you or your clients achieve more.',
};

export const Impressum = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Impressum.args = {
  headline: 'Impressum',
  copy: 'Ove Doll \n\n Gärtnertwiete 2 \n\n D-25451 Quickborn \n\n \n\n Email: moin@ovedoll.de\n\n \n\n USt-IdNr.: DE317975208\n\n \n\n Verantwortlich für den journalistisch-redaktionellen Inhalt im Sinne des RStV: Ove Doll, Gärtnertwiete 2,D-25451 Quickborn'
};
