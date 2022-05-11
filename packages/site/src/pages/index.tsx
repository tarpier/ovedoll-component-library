import { DynamicContent } from '../components/DynamicContent'
import { MyPageSeo } from '../components/MyPageSeo'
import { SimpleHeader } from '../components/SimpleHeader'
import { fetchPageBySlug } from '../utils/api'




export async function getStaticProps() {
  const pageContent = await fetchPageBySlug('')

  return {
    props: { pageContent },
    revalidate: false,
  };
}

export default function Home({ pageContent }) {
  const { attributes: { hero, content, slug, title, description, noIndex } } = pageContent

  return (
    <>
      <MyPageSeo
        path={slug}
        title={title}
        description={description}
        noindex={noIndex || false}
        noTitleTemplate
      />
      {
        hero ? (
          <SimpleHeader {...hero} />
        ) : null
      }
      <main className="min-h-screen">
        <DynamicContent components={content} />
      </main>
    </>
  )
}
