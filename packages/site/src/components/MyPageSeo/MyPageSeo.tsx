import NextHeadSeo from 'next-head-seo';

export type TPageSeoProps = {
  path: string;
  title: string;
  description: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
};

export const MyPageSeo: React.FC<TPageSeoProps> = (props) => {
  const {
    path,
    title = "default Title",
    description = "Default description",
    ogImagePath = "/og-default.png",
    noindex,
    noTitleTemplate,
  } = props;

  const APP_ROOT_URL = process.env.NEXT_PUBLIC_APP_ROOT_URL;

  // Absolute page url
  const pageUrl = path === '/' ? APP_ROOT_URL : APP_ROOT_URL + '/' + path
  // Absolute og image url
  const ogImageUrl = APP_ROOT_URL + ogImagePath

  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `${title} | Freelance Frontend Developer Ove Doll`}
      canonical={pageUrl}
      description={description}
      robots={noindex ? 'noindex, nofollow' : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: 'website',
        siteName: 'Freelance Frontend Developer Ove Doll',
      }}
      twitter={{
        card: "summary_large_image",
      }}
      customLinkTags={[
        { rel: 'icon', href: '/favicon.ico' }
      ]}
    />
  );
};