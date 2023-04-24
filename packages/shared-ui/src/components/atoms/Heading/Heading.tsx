import { createElement } from "react";
import type { ReactNode, HTMLAttributes, ComponentProps } from "react";
import classnames from "clsx";
import { twMerge } from "tailwind-merge";

const validLevels = [1, 2, 3, 4, 5] as const;
const alternateElements = ["span", "p"] as const;
type ValidElements =
  | `h${(typeof validLevels)[number]}`
  | (typeof alternateElements)[number];

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: (typeof validLevels)[number];
  as?: ValidElements;
  children?: ReactNode | string;
  className?: ComponentProps<ValidElements>["className"];
  style?: ComponentProps<ValidElements>["style"];
  testid?: string;
}

const Heading = ({
  level,
  children,
  as,
  className,
  style,
  testid,
}: HeadingProps) => {
  let element =
    as && validLevels.map((level) => `h${level}`).includes(as)
      ? as
      : `h${level}`;

  if (as && !as.startsWith("h")) {
    element = as;
  }

  const HeadingInternal = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    createElement(element, props, children);

  return (
    <HeadingInternal
      className={twMerge(
        classnames(
          "text-sans",
          "text-current",
          {
            'text-4xl font-bold font-heading lg:text-5xl': level === 1,
            'text-3xl font-bold font-heading lg:text-4xl': level === 2,
            'text-2xl font-bold font-heading lg:text-3xl': level === 3,
            'text-xl font-bold font-heading lg:text-2xl': level === 4,
            'text-lg font-heading lg:text-xl': level === 5
          },
          className
        )
      )}
      style={style}
      data-testid={testid}
    >
      {children}
    </HeadingInternal>
  );
};

export { Heading };
