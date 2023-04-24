import { GetServerSideProps } from 'next';
// import Sitemap from '../../util/Sitemap';
import { getAllSitemapData } from '../utils/api';
import { buildSitemapXml } from '../utils/buildSitemapXml';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const data = await getAllSitemapData()
  console.log(data)
  const transformedData = data.reduce((filtered, page) => {
    const pageUrl = `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/${page.slug}`
    filtered.push({
      loc: pageUrl,
      lastmod: page.updatedAt || undefined,
      priority: 0.7,
      changefreq: 'monthly',
    });

    return filtered;
  }, []);

  const sitemapContent = buildSitemapXml(transformedData);
  

  // res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapContent);

  res.end();

  // Empty since we don't render anything
  return {
    props: {},
  };
};

// Default export to prevent next.js errors
const SitemapXML: React.FC = () => {
  return null;

};

export default SitemapXML;