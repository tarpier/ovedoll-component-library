import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

export async function getAllSitemapData() {
  const query = `*[_type=='page' && noIndex == false]{
    'slug': slug.current,
    'updatedAt': _updatedAt
    }`
  const params = {}

  const sitemapData = await client.fetch(
    query,
    params
  );

  return sitemapData
}

export async function getAllPages() {
  const query = `*[_type=='page']{
    'slug': slug.current
    }`
  const params = {}

  const allPageSlugs = await client.fetch(
    query,
    params
  );

  return allPageSlugs
}

export async function getAllBlogPosts() {
  const query = `*[_type=='post']{
    'slug': slug.current,
    author -> {},
    body,
    categories,
    publishedAt,
    title
    }`
  const params = {}

  const allBlogPosts = await client.fetch(
    query,
    params
  );

  return allBlogPosts
}

export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}


export async function fetchPageContent(slug: string, type='page') {
  const query = `*[_type==$type && slug.current == $slug]`
  const params = { slug, type }

  const pageContent = await client.fetch(
    query,
    params
  );
  // [0] is alway the non drafts version
  return pageContent[0]
}
