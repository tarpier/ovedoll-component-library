import React from "react";
import { Copy } from ".";
import { type Meta } from "@storybook/react";
import { COPY_TEXT } from "../../../storyData";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const ComponentMeta: Meta<typeof Copy> = {
  component: Copy,
  tags: ["autodocs"],
};

type Variants =
  | "whiteBox"
  | "whiteBoxCentered"
  | "greenBox"
  | "greenBoxCentered";

const props: Record<Variants, Parameters<typeof Copy>[0]> = {
  whiteBox: {
    children: (
      <div
        dangerouslySetInnerHTML={{
          __html: COPY_TEXT.MINIMALRICHTEXT,
        }}
      />
    ),
  },
  whiteBoxCentered: {
    children: (
      <div className="text-center">
        <div
          dangerouslySetInnerHTML={{
            __html: COPY_TEXT.MINIMALRICHTEXT,
          }}
        />
      </div>
    ),
  },
  greenBox: {
    textColor: "white",
    children: (
      <div
        dangerouslySetInnerHTML={{
          __html: COPY_TEXT.MINIMALRICHTEXT,
        }}
      />
    ),
  },
  greenBoxCentered: {
    textColor: "white",
    children: (
      <div
        className="text-center"
        dangerouslySetInnerHTML={{
          __html: COPY_TEXT.MINIMALRICHTEXT,
        }}
      />
    ),
  },
};

export const WhiteBox = () => (
  <div className="box-white p-2">
    <Copy {...props.whiteBox} />
  </div>
);

export const WhiteBoxCentered = () => (
  <div className="box-white p-2">
    <Copy {...props.whiteBoxCentered} />
  </div>
);

export const GreenBox = () => (
  <div className="box-green p-2">
    <Copy {...props.greenBox} />
  </div>
);

export const GreenBoxCentered = () => (
  <div className="box-green p-2">
    <Copy {...props.greenBoxCentered} />
  </div>
);

export default ComponentMeta;
