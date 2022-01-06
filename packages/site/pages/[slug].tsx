import { ContentWrapper } from '../components/ContentWrapper'
import { DynamicContent } from '../components/DynamicContent'
import { MyPageSeo } from '../components/MyPageSeo'
import { SimpleHeader } from '../components/SimpleHeader'
import { TopBar } from '../components/TopBar'
import { fetchAPI, fetchPageBySlug } from '../utils/api'


export async function getStaticPaths() {
  const res = await fetchAPI('/api/pages')
  const pages = res.data.map(item => {

    const slug = item.attributes.slug
    return { params: { slug } }
  })

  return {
    paths: pages,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log({ params })
  const pageContent = await fetchPageBySlug(params.slug)

  return {
    props: { pageContent },
    revalidate: 1,
  };
}

export default function Page({ pageContent }) {
  const { attributes: { hero, content, slug, title, description, noIndex } } = pageContent

  return (
    <>
      <MyPageSeo
        path={slug}
        title={title}
        description={description}
        noindex={noIndex || false}
      />
      {
        hero ? (
          <SimpleHeader {...hero} />
        ) : null
      }
      <main className="">
        <DynamicContent components={content} />
      </main>
    </>
  )
}
