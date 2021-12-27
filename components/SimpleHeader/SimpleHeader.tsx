import { ContentWrapper } from "../ContentWrapper"

export const SimpleHeader = ({ dateLine, headline, paragraph }) => {
  return (
    <ContentWrapper>
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-5xl md:mb-12 py-24">
        <div>
          <p className="inline-block py-px mb-3 text-base md:text-lg font-regular tracking-widest md:tracking-wider uppercase text-accent">
            {dateLine}
          </p>
        </div>
        <h1 className="max-w-lg lg:max-w-5xl mb-6 font-sans text-[2.75rem] font-bold leading-tight sm:leading-none tracking-tight text-headline sm:text-[5rem] md:mx-auto">
          {headline}
        </h1>
        <p className="text-lg text-copy md:text-xl md:max-w-2xl mx-auto">
          {paragraph}
        </p>
      </div>
    </ContentWrapper>
  )
}