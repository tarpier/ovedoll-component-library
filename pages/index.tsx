import Head from 'next/head'
import { HeadlineTextHorizontal } from '../components/HeadlineTextHorizontal'
import { SimpleHeader } from '../components/SimpleHeader'
import { ContactForm } from '../components/ContactForm'
import { ProfileText } from '../components/ProfileText'
import { TopBar } from '../components/TopBar'
import { HeadlineText } from '../components/HeadlineText'

export default function Home() {
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
        <SimpleHeader
          dateLine='Ove Doll'
          headline='Freelance Frontend Developer'
          paragraph='I build fast and secure websites for your online business.'
        />
        <ProfileText
          profilePicture={{
            src: 'https://res.cloudinary.com/tarpier/image/upload/w_337,h_450/v1639264609/ovedoll.de/ove-1_vocqmq.jpg',
            alt: 'Freelance Next.js Developer Ove Doll'
          }}
          copy={`## Are you looking for a Freelance Frontend Developer?\n\nI’m a senior Frontend Developer with over 10 years of experience working on big corporate Projects as well as fast paced agency clients. I help companies, brands and agencies build digital products. \n\nI will help you build:\n\n- A fast and secure Jamstack website that is build using a static site generator like Next.js or Gatsby.\n\n- A well structured headless CMS which integrates seamlessly into your new or existing website. I'm especially fond of a headless CMS like Sanity or Strapi.\n\n\n\nI can also provide technical consultation on an existing or planned project, to improve code quality, website performance and your SEO score.\n\n`}

        />
        <HeadlineTextHorizontal
          headline1='Frontend Developer'
          headline2='Consultant'
          headline3='Trainer'
          copy={'Hey I’m Ove, fullstack developer specialized in frontend development, based in Hamburg, Germany. I am especially interested in the JAMStack and the whole ecosystem around it. \n\n I help companies, brands and agencies build digital products. This could mean building a website to attract new clients, running a fast and SEO friendly online shop or developing a solution for your specific needs. \n\n I would love to help you or your clients achieve more.'}
        />
        <HeadlineText
          dateLine='whamm bämm'
          headline={'Frontend Developer'}
          copy={'Hey I’m Ove, fullstack developer specialized in frontend development, based in Hamburg, Germany. I am especially interested in the JAMStack and the whole ecosystem around it. \n\n I help companies, brands and agencies build digital products. This could mean building a website to attract new clients, running a fast and SEO friendly online shop or developing a solution for your specific needs. \n\n I would love to help you or your clients achieve more.'}
        />
        <ContactForm actionUrl='/' />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t mt-10">
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
