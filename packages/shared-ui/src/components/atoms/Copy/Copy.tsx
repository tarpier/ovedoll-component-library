import type { ReactNode, ComponentProps } from "react";
import classNames from "clsx";

interface CopyProps {
  textColor?: "black" | "white";
  children?: ReactNode;
  className?: ComponentProps<"div">["className"];
  style?: ComponentProps<"div">["style"];
  testid?: string;
}
const Copy = ({
  textColor = "black",
  children,
  className,
  style,
  testid,
}: CopyProps): JSX.Element => {
  const styles = {
    "--tw-prose-bullets": "currentColor",
    ...style,
  };

  return (
    <div
      style={styles}
      data-testid={testid}
      className={classNames(
        "text-sans text-copyMobile lg:text-copyDesktop text-current",
        "flex flex-col gap-3",
        "prose",
        "max-w-none",
        "prose-p:mt-3 prose-p:mb-0 first:prose-p:mt-0",
        "lg:prose-h2:text-h2Desktop prose-h2:text-h2Mobile",
        "prose-h2:mt-12 prose-h2:mb-6",
        "lg:prose-h3:text-h3Desktop prose-h3:text-h3Mobile",
        "prose-h3:mt-12 prose-h3:mb-6",
        "prose-ul:list-disc prose-ul:list-inside prose-ul:mt-3 prose-ul:mb-0",
        "prose-li:color-current prose-li:mt-1 prose-li:mb-0",
        "prose-strong:text-current",
        "prose-a:text-current prose-a:underline prose-a:underline-offset prose-a:underline-offset-2 prose-a:decoration-2 prose-a:text-primary",
        { "prose-a:text-white": textColor === "white" },
        className
      )}
    >
      {children}
    </div>
  );
};

export { Copy };
