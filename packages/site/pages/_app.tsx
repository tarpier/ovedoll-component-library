import 'tailwindcss/tailwind.css'
import { ContentWrapper } from '../components/ContentWrapper'
import { TopBar } from '../components/TopBar'
import '../styles/styles.css'
import '../public/serviceworker.js'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <header>
          <TopBar />
        </header>
        <Component {...pageProps} />
        <footer className="h-24 mt-10 w-full bg-gray-800">
          <ContentWrapper isWide>
            <div className='flex justify-end pt-3'>
              <ul>
                <li>
                  <a className='text-white underline underline-offset-2 decoration-accent hover:no-underline hover:text-accent focus:text-accent' href='/imprint'>imprint</a>
                </li>
                <li>
                  <a className='text-white underline underline-offset-2 decoration-accent hover:no-underline hover:text-accent focus:text-accent' href='/privacy-policy'>privacy-policy</a>
                </li>
              </ul>
            </div>
          </ContentWrapper>
        </footer>
      </div >
    </>
  )
}

export default MyApp
