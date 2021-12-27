import Head from 'next/head'
import { HeadlineTextHorizontal } from '../components/HeadlineTextHorizontal'
import { SimpleHeader } from '../components/SimpleHeader'
import { ContactForm } from '../components/ContactForm'
import { ProfileText } from '../components/ProfileText'
import { TopBar } from '../components/TopBar'
import { HeadlineText } from '../components/HeadlineText'
import { ContentWrapper } from '../components/ContentWrapper'

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
            alt: 'Freelance Frontend Developer Ove Doll'
          }}
          copy={`## Are you looking for a Freelance Frontend Developer?\n\nI’m a senior Frontend Developer with over 10 years of experience working on big corporate Projects as well as fast paced agency clients. I help companies, brands and agencies build digital products. \n\n\n\nI will help you build:\n\n- A fast and secure Jamstack website that is build using a static site generator like Next.js or Gatsby.\n\n- A well structured headless CMS which integrates seamlessly into your new or existing website. I'm especially fond of a headless CMS like Sanity or Strapi.\n\n\n\nI can also provide technical consultation on an existing or planned project, to improve code quality, website performance and your SEO score.\n\n`}

        />
        <HeadlineText
          dateLine='Services'
          headline={'How can I help your Project as a Freelance Frontend Developer'}
          copy={`As senior Frontend Developer I have specialised in React as a framework and work a lot in the Jamstack context. This means building very fast static sites that are enhanced through serverless functions to deliver the best in class performance and flexibility.\n\n \n\n Common scenarios where I deliver successful projects:\n\n 1.  You are planning a new project and require technical advice on the frontend architecture.\n\n 2. Your team needs a freelance Frontend Developer to support and create deliverables.\n\n 3. Your design and UX is finished and you need a freelance Frontend Engineer to build the UI components or a full fledged UI / Design system.\n\n 4. You wish to integrate ecommerce capabilities to an existing site or start a new headless Shopify project.\n\n 5. Your website needs a content management system and you want to add a modern headless CMS.\n\n \n\n Does one or more cases sound familiar, do reach out and let us discuss how I can advice on your project.\n\n`}
        />
        {/* <HeadlineTextHorizontal
          headline1='Frontend Developer'
          headline2='Consultant'
          headline3='Trainer'
          copy={'Hey I’m Ove, fullstack developer specialized in frontend development, based in Hamburg, Germany. I am especially interested in the JAMStack and the whole ecosystem around it. \n\n I help companies, brands and agencies build digital products. This could mean building a website to attract new clients, running a fast and SEO friendly online shop or developing a solution for your specific needs. \n\n I would love to help you or your clients achieve more.'}
        /> */}
        <ContactForm actionUrl='/' />
      </main>

      <footer className="h-24 mt-10 w-full bg-gray-800">
        <ContentWrapper isWide>
          <div className='flex justify-end pt-3'>
            <ul>
              <li>
                <a className='text-white underline underline-offset-2 decoration-accent hover:no-underline hover:text-accent focus:text-accent' href='/impressum'>Impressum</a>
              </li>
              <li>
                <a className='text-white underline underline-offset-2 decoration-accent hover:no-underline hover:text-accent focus:text-accent' href='/datenschutz'>Datenschutz</a>
              </li>
            </ul>
          </div>
        </ContentWrapper>
      </footer>
    </div >
  )
}
