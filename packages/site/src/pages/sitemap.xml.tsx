import { GetServerSideProps } from 'next';
// import Sitemap from '../../util/Sitemap';
import { fetchAPI } from '../utils/api';
import { buildSitemapXml } from '../utils/buildSitemapXml';

const getAllData = async () => {
  const res = await fetchAPI('/api/pages')
  return res.data
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const data = await getAllData();
  const transformedData = data.reduce((filtered, page) => {
    // exclude documents that should not be in the sitemap e.g. noindex etc.
    const isExcluded = page.attributes.noIndex;
    if (isExcluded) return filtered;

    const pageUrl = `${process.env.NEXT_PUBLIC_APP_ROOT_URL}/${page.attributes.slug}`
    filtered.push({
      loc: pageUrl,
      lastmod: page.attributes.updatedAt || undefined,
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