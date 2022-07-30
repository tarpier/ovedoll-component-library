import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

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

// TODO: type slug und isRootPage als either or
export async function fetchPageContent(slug) {
  const query = `*[_type=='page' && slug.current == $slug]`
  const params = { slug }

  const pageContent = await client.fetch(
    query,
    params
  );

  return pageContent[0]
}
