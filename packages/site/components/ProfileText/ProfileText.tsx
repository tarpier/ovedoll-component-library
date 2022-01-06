import ReactMarkdown from 'react-markdown';
import { mdConfig } from '../../utils/mdConfig';
import { ContentWrapper } from '../ContentWrapper';

export interface IProfileTextProps {
  imgSrc: string;
  imgAlt: string;
  copy: string;
  dateLine?: string;
  buttonLabel: string;
}



export const ProfileText = ({ imgSrc, imgAlt, buttonLabel, copy, dateLine }: IProfileTextProps) => {

  return (
    <ContentWrapper className='pb-36' isWide>
      {dateLine ? (
        <p className="inline-block py-px mb-2 text-base font-regular tracking-wide uppercase text-accent">
          {dateLine}
        </p>
      ) : null}
      <div className={'flex flex-col-reverse lg:flex-row'}>
        <div className={'lg:w-2/3 pr-4 prose mx-auto'}>
          <ReactMarkdown children={copy} components={mdConfig} />
        </div>
        <div className={'lg:w-1/3 justify-center flex lg:items-center'}>
          <div className="flex-none mb-10 h-[450px] w-full md:w-[337px] relative z-10 md:before:absolute md:before:top-2 md:before:left-2 md:before:w-full md:before:h-full md:before:bg-accent">
            <img
              src={imgSrc}
              alt={imgAlt}
              className={'absolute z-10 inset-0 rounded-sm'}
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className="inline-flex items-center px-8 py-5 border border-transparent shadow-sm font-bold text-xl rounded-sm text-headline tracking-wider hover:copy bg-accent-light hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent ">
          {buttonLabel}
        </button>
      </div>
    </ContentWrapper>
  );
};
