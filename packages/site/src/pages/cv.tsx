import { DynamicContent } from '../components/DynamicContent'
import { MyPageSeo } from '../components/MyPageSeo'
import { SimpleHeader } from '../components/SimpleHeader'
import { fetchPageBySlug } from '../utils/api'




export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/getCvData');
  const data = await response.json();

  return {
    props: { data: data.data.results },
    revalidate: false,
  };
}

const CvEntry = (singleCvEntryData) => {
  console.log(JSON.stringify(singleCvEntryData, null, 2))
  const { properties: { name, timeframe, type, agency, title, aufgaben, url tags } } = singleCvEntryData
  return (
    <div>

      {JSON.stringify(tags, null, 2)}
    </div>
  )
}


export default function Cv({ data }) {

  return (
    <>

      {data.slice(0, 1).map(singleEntry => (<CvEntry {...singleEntry} />))}
    </>
  )
}
