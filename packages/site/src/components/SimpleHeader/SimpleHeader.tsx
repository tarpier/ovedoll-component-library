import { ContentWrapper } from "../ContentWrapper"
import { Headline } from "../Headline"

export interface ISimpleHeaderProps {
  dateLine: string
  headline: string
  copy: string
}

export const SimpleHeader = ({ dateLine, headline, copy }: ISimpleHeaderProps) => {
  return (
    <ContentWrapper>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-5xl md:mb-12 pb-24">
        <div>
          <p className="inline-block py-px mb-3 text-base md:text-lg font-regular tracking-widest md:tracking-wider uppercase text-accent">
            {dateLine}
          </p>
        </div>
        <Headline order='h1'>
          {headline}
        </Headline>
        <p className="text-lg text-copy md:text-xl md:max-w-2xl mx-auto">
          {copy}
        </p>
      </div>
    </ContentWrapper>
  )
}