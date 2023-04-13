import { ContentWrapper } from '../ContentWrapper';
import { DateLine } from '../DateLine';
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
        <h2 className="font-sans text-3xl mb-4 font-bold tracking-tight text-headline sm:text-4xl leading-relaxed">
          {dateLine ? (
            <DateLine content={dateLine}/>
          ) : null}
          {headline}
          </h2>
        <ProseableText value={copy} />

      </div>
    </ContentWrapper>
  );
};
