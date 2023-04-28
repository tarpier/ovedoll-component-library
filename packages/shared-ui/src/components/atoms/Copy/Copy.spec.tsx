import React from "react";
import { test, expect } from "@playwright/experimental-ct-react";
import { GreenBox, WhiteBox } from "./Copy.stories";
import { COPY_TEXT } from "../../../storyData";

test.describe("Copy", () => {
  test("Left aligned copy on white", async ({ mount }) => {
    const component = await mount(<WhiteBox />);

    await expect(component).toHaveScreenshot();
    await expect(component).toContainText(
      COPY_TEXT.MINIMALRICHTEXT.replace(/<[^>]*>?/gm, "")
    );
    // TODO: color should be coming from tailwind config see https://tailwindcss.com/docs/configuration#referencing-in-java-script
    await expect(component.locator("a")).toHaveCSS(
      "color",
      "rgb(122, 198, 140)"
    );
  });

  test("Left aligned copy on green", async ({ mount }) => {
    const component = await mount(<GreenBox />);

    await expect(component).toHaveScreenshot();
    await expect(component).toContainText(
      COPY_TEXT.MINIMALRICHTEXT.replace(/<[^>]*>?/gm, "")
    );
    // TODO: color should be coming from tailwind config see https://tailwindcss.com/docs/configuration#referencing-in-java-script
    await expect(component.locator("a")).toHaveCSS(
      "color",
      "rgb(255, 255, 255)"
    );
  });
});
