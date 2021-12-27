import { ContentWrapper } from '../ContentWrapper';

interface IContactFormProps {
  btnLabel?: string,
  actionUrl: string
}

export const ContactForm = ({ btnLabel = 'Hire me today', actionUrl }: IContactFormProps) => {
  return (
    <ContentWrapper>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className={'flex items-center justify-center w-12 h-12 text-headline '}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentcolor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="max-w-lg mx-auto mt-5">
              {/* <h2 className="text-2xl font-bold tracking-tight text-headline sm:text-3xl"> */}
              <h2 className="font-sans text-3xl font-bold tracking-tight text-headline sm:text-4xl sm:leading-none lg:leading-tight pb-8">
                Lets work together on your next frontend project
              </h2>
              <p className="mt-3 text-lg leading-6 text-copy">
                I'd love to work with you.
              </p>
              <p className="mt-3 text-lg leading-6 text-copy">
                If you like to talk about your Next.js project or need advice on a digital product message me.</p>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form action={actionUrl} method="POST" className="grid grid-cols-1 gap-y-6">
                <div className='pb-2'>
                  <div className='pb-3'>
                    <label htmlFor="full-name" className='text-xl text-headline'>
                      Full name
                    </label>
                  </div>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-sm"
                    placeholder="John Smith"
                  />
                </div>
                <div className='pb-2'>
                  <div className=' pb-3'>
                    <label htmlFor="email" className='text-xl text-headline'>
                      Email
                    </label>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-sm"
                    placeholder="you@your-domain.com"
                  />
                </div>
                {/* <div className='pb-2'>
                  <div className=' pb-3'>
                    <label htmlFor="phone" className='text-xl text-headline'>
                      Phone
                    </label>
                  </div>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border-gray-300 rounded-sm"
                    placeholder="Phone"
                  />
                </div> */}
                <div className='pb-2'>
                  <div className=' pb-3'>
                    <label htmlFor="message" className='text-xl text-headline'>
                      Tell me about your project
                    </label>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-accent focus:border-accent border border-gray-300 rounded-sm"
                    placeholder="Hey Ove, I would like to work on this Next.js Project with you."
                    defaultValue={''}
                  />

                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-5 border border-transparent shadow-sm font-bold text-xl rounded-sm text-headline tracking-wider hover:copy bg-accent-light hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent ">
                    Hire me today
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};
