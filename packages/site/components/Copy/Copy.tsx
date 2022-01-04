import { ContentWrapper } from '../ContentWrapper';
import ReactMarkdown from 'react-markdown';
import { mdConfig } from '../../utils/mdConfig';

export interface ICopyProps {
  copy: string;
  dateLine?: string;
}

export const Copy = ({ copy, dateLine }: ICopyProps) => {
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
        <div className="prose">
          <ReactMarkdown children={copy} components={mdConfig} />
        </div>
      </div>
    </ContentWrapper>
  );
};
