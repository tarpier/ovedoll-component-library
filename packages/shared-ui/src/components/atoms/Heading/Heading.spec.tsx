import { test, expect } from "@playwright/experimental-ct-react";
import { Heading } from "./Heading";
import React from "react";
import { TEXT } from "../../../storyData";
import { type CSSWithCustomProps } from "../../types";

test.describe("Heading", () => {
  test("Heading H1", async ({ mount }) => {
    const wrapperStyles: CSSWithCustomProps = {
      color: "black",
    };

    const props = {
      label: TEXT.HEADING.LONG,
    };

    const component = await mount(
      <div style={wrapperStyles}>
        <Heading level={1}>{props.label}</Heading>
      </div>
    );

    await expect(component).toContainText(props.label);
    await expect(component).toHaveScreenshot();
  });

  test("Heading H2", async ({ mount }) => {
    const wrapperStyles: CSSWithCustomProps = {
      color: "black",
    };

    const props = {
      label: TEXT.HEADING.LONG,
    };

    const component = await mount(
      <div style={wrapperStyles}>
        <Heading level={2}>{props.label}</Heading>
      </div>
    );

    await expect(component).toContainText(props.label);
    await expect(component).toHaveScreenshot();
  });

  test("Heading H3", async ({ mount }) => {
    const wrapperStyles: CSSWithCustomProps = {
      color: "black",
    };

    const props = {
      label: TEXT.HEADING.LONG,
    };

    const component = await mount(
      <div style={wrapperStyles}>
        <Heading level={3}>{props.label}</Heading>
      </div>
    );

    await expect(component).toContainText(props.label);
    await expect(component).toHaveScreenshot();
  });

  test("Heading H4", async ({ mount }) => {
    const wrapperStyles: CSSWithCustomProps = {
      color: "black",
    };

    const props = {
      label: TEXT.HEADING.LONG,
    };

    const component = await mount(
      <div style={wrapperStyles}>
        <Heading level={4}>{props.label}</Heading>
      </div>
    );

    await expect(component).toContainText(props.label);
    await expect(component).toHaveScreenshot();
  });

  test("Heading H5", async ({ mount }) => {
    const wrapperStyles: CSSWithCustomProps = {
      color: "black",
    };

    const props = {
      label: TEXT.HEADING.LONG,
    };

    const component = await mount(
      <div style={wrapperStyles}>
        <Heading level={5}>{props.label}</Heading>
      </div>
    );

    await expect(component).toContainText(props.label);
    await expect(component).toHaveScreenshot();
  });

  test("Heading with arbitrary class", async ({ mount }) => {
    const wrapperStyles: CSSWithCustomProps = {
      color: "black",
    };

    const props = {
      label: TEXT.HEADING.SHORT,
    };

    const component = await mount(
      <div style={wrapperStyles}>
        <Heading as="h1" level={3} className="text-orange" testid="headline">
          {props.label}
        </Heading>
      </div>
    );

    await expect(component).toContainText(props.label);
    expect(
      await component.getByTestId("headline").evaluate((el) => el.tagName)
    ).toBe("H1");
    await expect(component.getByTestId("headline")).toHaveClass(/text-orange/);

    await expect(component).toHaveScreenshot();
  });

  test("Heading with arbitrary style", async ({ mount }) => {
    const wrapperStyles: CSSWithCustomProps = {
      color: "black",
    };

    const props = {
      label: TEXT.HEADING.SHORT,
    };

    const component = await mount(
      <div style={wrapperStyles}>
        <Heading level={1} style={{ fontWeight: "bold" }} testid="headline">
          {props.label}
        </Heading>
      </div>
    );

    await expect(component).toContainText(props.label);
    expect(
      await component.getByTestId("headline").evaluate((el) => el.tagName)
    ).toBe("H1");
    await expect(component.getByTestId("headline")).toHaveCSS(
      "font-weight",
      "700"
    );

    await expect(component).toHaveScreenshot();
  });

  test("Heading as p", async ({ mount }) => {
    const wrapperStyles: CSSWithCustomProps = {
      color: "black",
    };

    const props = {
      label: TEXT.HEADING.SHORT,
    };

    const component = await mount(
      <div style={wrapperStyles}>
        <Heading level={1} as={"p"} testid="headline">
          {props.label}
        </Heading>
      </div>
    );

    await expect(component).toContainText(props.label);
    expect(
      await component.getByTestId("headline").evaluate((el) => el.tagName)
    ).toBe("P");

    await expect(component).toHaveScreenshot();
  });
});
