import Head from 'next/head'
import { HeadlineText } from '../components/HeadlineText'
import { HorizontalVideoLink } from '../components/HorizontalVideoLink'
import { TextImage } from '../components/TextImage'
import { TextImageSmall } from '../components/TextImageSmall'
import { TextImageGrid } from '../components/TextImageGrid'
import { TextSkewedImage } from '../components/TextSkewedImage'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">


        <HorizontalVideoLink
          poster={{ imgSrc: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260', imgAlt: '' }}
          dateLine={'brand new'}
          headline={'The quick, brown fox jumps over a lazy dog'}
          paragraph={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.'}
          videoHref={'/'}
        />
        <HeadlineText />
        <TextImage />
        <TextImageSmall />
        <TextImageGrid />
        <TextSkewedImage />

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
