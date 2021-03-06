
const withXMLTemplate = (content: string): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${content}</urlset>`;
};

type TSitemapFields = {
  loc: string,
  lastmod: string,
  priority: number,
  changefreq: string,
}[]

/**
 * Build xml structure according to sitemap spec
 * @param fields TSitemapFields
 * @returns string
 */
export const buildSitemapXml = (fields: TSitemapFields): string => {
  const content = fields
    .map((fieldData) => {
      const field = Object.entries(fieldData).map(
        ([key, value]) => {
          if (!value) return '';
          return `<${key}>${value}</${key}>`;
        },
      );

      return `<url>${field.join('')}</url>\n`;
    })
    .join('');

  return withXMLTemplate(content);
};


