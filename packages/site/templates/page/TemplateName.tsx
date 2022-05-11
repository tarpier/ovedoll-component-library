import { MyPageSeo } from "../../src/components/MyPageSeo";

export async function getStaticProps() {
  return {
    props: { pageContent: 'hello' },
    revalidate: false,
  };
}

export default function TemplateName({ pageContent }) {
  const noIndex = false

  return (
    <>
      <MyPageSeo
        path={'INSERT SLUG'}
        title={'INSERT TITLE'}
        description={'INSERT DESCRIPTION'}
        noindex={noIndex || false}
        noTitleTemplate
      />
      
      <main className="min-h-screen">
        <h1>{TemplateName} page</h1>
      </main>
    </>
  )
}
