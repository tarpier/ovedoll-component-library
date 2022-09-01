import { BlogPost } from '../../components/BlogPost'
import { MyPageSeo } from '../../components/MyPageSeo'
import { getAllBlogPosts } from '../../utils/api'
// import { MyPageSeo } from '../components/MyPageSeo'
import { fetchPageContent } from '../../utils/api'
import { slugParamToPath } from '../../utils/url'


export async function getStaticPaths() {
  const allBlogsSlugs = await getAllBlogPosts()
  const paths = allBlogsSlugs.map(entry => {
    
    if (entry.slug === "/") {
      return { params: { slug: undefined } }
    }

    return { params: { slug: entry.slug } }
  })
// console.log(paths)
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log('params',params)
  const slug = slugParamToPath(params?.slug)
  console.log(slug)
  const pageContent = await fetchPageContent(slug, 'post')

  return {
    props: { pageContent },
    revalidate: false,
  };
}

export default function Page({ pageContent }) {
  const { hero, body, slug, title, description, noIndex } = pageContent

  return (
    <>
       <MyPageSeo
        path={slug.current}
        title={title}
        description={description}
        noindex={noIndex || false}
      />
      
      <main className="min-h-screen">
        <BlogPost headline={title} body={body} />
      </main>
    </>
  )
}



