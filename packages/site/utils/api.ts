

export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data?.data[0];
}

export async function fetchPageBySlug(slug) {
  const requestUrl = getStrapiURL(`/api/pages?filters[slug][$eq]=${slug}&populate=%2A`);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data?.data[0];
}