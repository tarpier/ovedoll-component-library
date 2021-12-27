import { ContentWrapper } from "../ContentWrapper";
import ReactMarkdown from 'react-markdown'
import { mdConfig } from "../../utils/mdConfig";

interface IHeadlineTextProps {
  headline: string
  copy: string
  dateLine?: string
}

export const HeadlineText = ({ headline, copy, dateLine }: IHeadlineTextProps) => {
  return (
    <ContentWrapper>
      <div className="flex flex-col pb-24">
        <div className="mb-6">
          {dateLine ? (
            <p className="inline-block py-px mb-2 text-base font-regular tracking-wide uppercase text-accent">
              {dateLine}
            </p>
          ) : null}
          <h2 className="font-sans text-3xl font-bold tracking-tight text-headline sm:text-4xl sm:leading-none lg:leading-tight">
            {headline}
          </h2>
        </div>
        <div className="">
          <ReactMarkdown children={copy} components={mdConfig} />
        </div>
      </div>
    </ContentWrapper>
  );
};