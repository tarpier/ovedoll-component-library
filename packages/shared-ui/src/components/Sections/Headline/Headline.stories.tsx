
import React from "react";
import { Headline } from "./";
import { StoryObj, type Meta, type StoryFn } from "@storybook/react";
import { COPY_TEXT, TEXT } from "../../../storyData";


const ComponentMeta: Meta<typeof Headline> = {
  title: 'Sections/Headline',
  component: Headline,
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

type Story = StoryObj<typeof Headline>;

export const HeadingLevel1: Story = {
  args: {
    level: 1,
    children: TEXT.HEADING.LONG,
    subLine: <p>{TEXT.HEADING.SHORT}</p>,
  }
}

export const HeadingLevel1Centered: Story = {
  args: {
    level: 1,
    children: TEXT.HEADING.LONG,
    subLine: <p>{TEXT.HEADING.SHORT}</p>,
    variant: "centered"
  }
}
export const HeadingLevel1Copy: Story = {
  args: {
    level: 1,
    children: TEXT.HEADING.LONG,
    subLine: <p>{TEXT.HEADING.SHORT}</p>,
    variant: "centered",
    copy: <div dangerouslySetInnerHTML={{__html: COPY_TEXT.SHORT}}></div>
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

export default ComponentMeta;
