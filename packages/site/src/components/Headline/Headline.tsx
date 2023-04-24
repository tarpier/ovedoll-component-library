export interface IHeadlineProps {
  children: React.ReactNode,
  order: 'h1' | 'h1-blog' | 'h2' | 'h3' | 'h4'
}

export const Headline = ({ children, order }: IHeadlineProps) => {
  switch (order) {
    case 'h1':
      return <h1 className="max-w-lg lg:max-w-5xl pb-6 font-sans text-[2.75rem] font-bold leading-tight sm:leading-none tracking-tight text-headline sm:text-[5rem] md:mx-auto">{children}</h1>
    case 'h1-blog':
      return <h1 className="font-sans mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-headline sm:text-4xl">{children}</h1>
    case 'h2':
      return <h2 className="font-sans text-3xl pb-5 font-bold tracking-tight text-headline sm:text-4xl leading-relaxed capsize">{children}</h2>
    case 'h3':
      return <h3 className="font-sans text-2xl pb-4 font-bold tracking-tight text-headline sm:text-3xl leading-relaxed capsize">{children}</h3>
    case 'h4':
      return <h4 className="font-sans text-xl pb-3 font-bold tracking-tight text-headline sm:text-2xl leading-relaxed capsize">{children}</h4>

  }
}