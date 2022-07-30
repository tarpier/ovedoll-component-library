import { DynamicContent } from '../components/DynamicContent'
import { MyPageSeo } from '../components/MyPageSeo'
import { SimpleHeader } from '../components/SimpleHeader'
import { fetchAPI, fetchPageContent, getAllPages } from '../utils/api'
import { slugParamToPath } from '../utils/url'


export async function getStaticPaths() {
  const allPageSlugs = await getAllPages()
  const paths = allPageSlugs.map(entry => {

    if (entry.slug === "/") {
      return { params: { slug: undefined } }
    }

    return { params: { slug: [entry.slug] } }
  })

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = slugParamToPath(params?.slug)
  const pageContent = await fetchPageContent(slug)

  return {
    props: { pageContent },
    revalidate: false,
  };
}

export default function Page({ pageContent }) {
  const { hero, content, slug, title, description, noIndex } = pageContent

  return (
    <>
      <MyPageSeo
        path={slug.current}
        title={title}
        description={description}
        noindex={noIndex || false}
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



