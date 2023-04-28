import React from "react";
import { Heading } from "./Heading";
import { StoryObj, type Meta, type StoryFn } from "@storybook/react";
import { TEXT } from "../../../storyData";

const ComponentMeta: Meta<typeof Heading> = {
  title: 'Components/Atoms/Heading',
  component: Heading,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="bg-white text-black max-w-screen-xl">
        <Story />
      </div>
    
    ),
  ],
};

type Story = StoryObj<typeof Heading>;

export const HeadingLevel1: Story = {
  args: {
    level: 1,
    children: TEXT.HEADING.LONG,
  }
}

export const HeadingLevel2: Story = {
  args: {
    level: 2,
    children: TEXT.HEADING.LONG,
  }
}

export const HeadingLevel3: Story = {
  args: {
    level: 3,
    children: TEXT.HEADING.LONG,
  }
}

export const HeadingLevel4: Story = {
  args: {
    level: 4,
    children: TEXT.HEADING.LONG,
  }
}

export const HeadingLevel5: Story = {
  args: {
    level: 5,
    children: TEXT.HEADING.LONG,
  }
}

export const HeadingAs1Rendered3: Story = {
  args: {
    children: TEXT.HEADING.LONG,
    as: "h1",
    level: 3,
  }
}

export const HeadingAsPRendered3: Story = {
  args: {
    children: TEXT.HEADING.LONG,
    as: "p",
    level: 3,
  }
}

// const TemplateOnWhite: StoryFn<typeof Heading> = (args) => (
//   <div className="bg-[var(--background)] text-[var(--foreground)]">
//     <Heading {...args} />
//   </div>
// );
// // const Template: StoryFn<typeof Heading> = (args) => <Heading {...args} />;

// export const HeadingLevel1 = TemplateOnWhite.bind({});
// HeadingLevel1.args = {
//   level: 1,
//   children: TEXT.HEADING.LONG,
// };

// export const HeadingLevel2 = TemplateOnWhite.bind({});
// HeadingLevel2.args = {
//   ...HeadingLevel1.args,
//   level: 2,
// };

// export const HeadingLevel3 = TemplateOnWhite.bind({});
// HeadingLevel3.args = {
//   ...HeadingLevel1.args,
//   level: 3,
// };

// export const HeadingLevel4 = TemplateOnWhite.bind({});
// HeadingLevel4.args = {
//   ...HeadingLevel1.args,
//   level: 4,
// };

// export const HeadingLevel5 = TemplateOnWhite.bind({});
// HeadingLevel5.args = {
//   ...HeadingLevel1.args,
//   level: 5,
// };

// export const HeadingAs1rendered3 = TemplateOnWhite.bind({});
// HeadingAs1rendered3.args = {
//   children: TEXT.HEADING.LONG,
//   as: "h1",
//   level: 3,
// };

// export const HeadingWithArbitraryClass = TemplateOnWhite.bind({});
// HeadingWithArbitraryClass.args = {
//   children: TEXT.HEADING.LONG,
//   as: "h1",
//   level: 3,
//   className: "text-orange",
// };

// export const HeadingWithArbitraryStyle = TemplateOnWhite.bind({});
// HeadingWithArbitraryStyle.args = {
//   children: TEXT.HEADING.LONG,
//   level: 1,
//   style: { fontWeight: "bold" },
// };

// export const HeadingAsP = TemplateOnWhite.bind({});
// HeadingAsP.args = {
//   children: TEXT.HEADING.LONG,
//   level: 1,
//   as: "p",
// };

export default ComponentMeta;
