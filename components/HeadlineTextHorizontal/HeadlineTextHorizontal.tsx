import { ContentWrapper } from "../ContentWrapper";
import ReactMarkdown from 'react-markdown'
import { mdConfig } from "../../utils/mdConfig";

interface IHeadlineTextHorizontalProps {
  headline1: string
  headline2: string
  headline3: string
  copy: string
}

export const HeadlineTextHorizontal = ({ headline1, headline2, headline3, copy }: IHeadlineTextHorizontalProps) => {
  return (
    <ContentWrapper>
      <div className="flex flex-col md:flex-row pb-24">
        <div className="mb-6 lg:mb-0 md:w-1/2 xl:w-1/3 lg:pr-5">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-headline sm:text-4xl sm:leading-none lg:leading-tight">
            <span className="inline-block text-accent">
              {headline1}
            </span>
            <br className="block" />
            {headline2}
            <br className="block" />
            {headline3}
          </h2>
        </div>
        <div className="md:w-1/2 xl:w-2/3">
          <ReactMarkdown children={copy} components={mdConfig} />
        </div>
      </div>
    </ContentWrapper>
  );
};