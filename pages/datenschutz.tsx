import Head from 'next/head'
import { Footer } from '../components/Footer'
import { HeadlineText } from '../components/HeadlineText'
import { TopBar } from '../components/TopBar'


export default function Datenschutz() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Freelance Frontend Developer Ove Doll</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <TopBar />
      </header>
      <main className="">

        <HeadlineText
          dateLine='Services'
          headline={'Datenschutz'}
          copy={`As senior Frontend Developer I have specialised in React as a framework and work a lot in the Jamstack context. This means building very fast static sites that are enhanced through serverless functions to deliver the best in class performance and flexibility.\n\n \n\n Common scenarios where I deliver successful projects:\n\n 1.  You are planning a new project and require technical advice on the frontend architecture.\n\n 2. Your team needs a freelance Frontend Developer to support and create deliverables.\n\n 3. Your design and UX is finished and you need a freelance Frontend Engineer to build the UI components or a full fledged UI / Design system.\n\n 4. You wish to integrate ecommerce capabilities to an existing site or start a new headless Shopify project.\n\n 5. Your website needs a content management system and you want to add a modern headless CMS.\n\n \n\n Does one or more cases sound familiar, do reach out and let us discuss how I can help on your project.\n\n`}
        />

      </main>

      <Footer />
    </div >
  )
}
