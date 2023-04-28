import { Copy, Heading, } from "../../Atoms"
import type { validLevels } from "../../Atoms/Heading/Heading"
import { clsx } from "clsx"

interface HeadlineProps {
  children: React.ReactNode;
  level: (typeof validLevels)[number];
  subLine?: React.ReactNode;
  variant?: "default" | "centered";
  copy?: React.ReactNode
}

const Headline = ({ children, level, subLine, variant = "default", copy, ...props }: HeadlineProps) => {
  return (
    <section {...props} className="container flex flex-col items-center gap-y-8">
      <div className={clsx({ "text-center": variant === "centered" })}>
        {subLine ? subLine : null}
        <Heading level={level} >
          {children}
        </Heading>
      </div>
      {
        copy ? (
          <div className="max-w-prose">
            <Copy className={clsx({ "text-center": variant === "centered" })}>
              {copy}
            </Copy>
          </div>
        ) : null
      }
    </section>
  )
}

export {
  Headline
}