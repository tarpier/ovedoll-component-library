import { ContentWrapper } from '../ContentWrapper';
import { ProseableText } from '../ProseableText';

export interface ICopyProps {
  copy: any[];
  dateLine?: string;
  headline: string;
}

export const Copy = ({ copy, dateLine, headline }: ICopyProps) => {
  return (
    <ContentWrapper className="pb-24">
      <div className="flex flex-col">
        <div className="mb-6">
          {dateLine ? (
            <p className="inline-block py-px mb-2 text-base font-regular tracking-wide uppercase text-accent">
              {dateLine}
            </p>
          ) : null}
        </div>
        <h2 className="font-sans text-3xl mb-4 font-bold tracking-tight text-headline sm:text-4xl leading-relaxed">{headline}</h2>
        <ProseableText value={copy} />

      </div>
    </ContentWrapper>
  );
};
