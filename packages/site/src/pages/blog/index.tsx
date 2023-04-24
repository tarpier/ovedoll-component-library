import { BlogPost } from '../../components/BlogPost'
import { MyPageSeo } from '../../components/MyPageSeo'
import { getAllBlogPosts } from '../../utils/api'
// import { MyPageSeo } from '../components/MyPageSeo'
import { fetchPageContent } from '../../utils/api'
import { slugParamToPath } from '../../utils/url'


// export async function getStaticPaths() {
//   const allBlogsSlugs = await getAllBlogPosts()
//   const paths = allBlogsSlugs.map(entry => {

//     if (entry.slug === "/") {
//       return { params: { slug: undefined } }
//     }

//     return { params: { slug: entry.slug } }
//   })
// // console.log(paths)
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticProps() {
    const allBlogPosts = await getAllBlogPosts()

    return {
        props: { allBlogPosts },
        revalidate: false,
    };
}

export default function BlogPostPage({ allBlogPosts }) {

    return (
        <>
            {/* <MyPageSeo
        path={slug.current}
        title={title}
        description={description}
        noindex={noIndex || false}
      /> */}

            <main className="min-h-screen">
                <pre>


                </pre>
                BLOG INDEX
                {
                    allBlogPosts.map(post => (

                        <p>{post.title}</p>
                    )
                    )

                }
                {/* <BlogPost headline={title} body={body} /> */}
            </main>
        </>
    )
}



