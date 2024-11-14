import 'server-only';

import { cookies, headers } from 'next/headers';
import { redirect, notFound } from 'next/navigation';
import { sitecorePagePropsFactory } from 'lib/page-props-factory';
// import { sitemapFetcher } from 'lib/sitemap-fetcher';
import { Providers } from './Providers';
import Layout from './jss-layout';
import { setServerContext } from '@sitecore-jss/sitecore-jss-nextjs';
// import { i18n } from '../../../../i18n-config';
// import { StaticPath } from '@sitecore-jss/sitecore-jss-nextjs';

//type PageProps = { params: { path?: string[]; lang: string } } ;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: any) {
  const context = {
    preview: false,
    params,
    locale: params.lang,
    req: { cookies: cookies(), headers: headers() },
  };

  const pageProps = await sitecorePagePropsFactory.create(context);
  setServerContext(pageProps);
  //const pageProps1 = unstable_cache(await sitecorePagePropsFactory.create);
  //console.log(params);

  //console.log(pageProps);
  //console.log(context.params);

  if (pageProps.notFound) {
    notFound();
  }

  if (pageProps.redirect) {
    redirect(pageProps.redirect.destination);
  }

  return (
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    /* @ts-ignore */
    <Providers {...pageProps}>
      <Layout layoutData={pageProps.layoutData} headLinks={pageProps.headLinks} />
    </Providers>
  );
}

// <Head /> tag implementation
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any) {
  return {
    title: 'test',
  };
}

/* ============ SSR START =============== */
export const dynamic = 'force-dynamic';
/* ============ SSR END =============== */

/* ============ SSG START =============== */
// export const generateStaticParams = async () => {
//   let paths: StaticPath[] = [];

//   if (process.env.NODE_ENV !== 'development' && !process.env.DISABLE_SSG_FETCH) {
//     try {
//       // Note: Next.js runs export in production mode
//       paths = await sitemapFetcher.fetch(i18n.locales);
//     } catch (error) {
//       console.log('Error occurred while fetching static paths');
//       console.log(error);
//     }
//   }

//   return paths;
// };

// Dynamic segments not included in generateStaticParams are generated on demand.
// https://beta.nextjs.org/docs/api-reference/segment-config#dynamicparams
// export const dynamicParams = true;

// https://beta.nextjs.org/docs/api-reference/segment-config#revalidate
// export const revalidate = 5;

// https://beta.nextjs.org/docs/api-reference/segment-config#dynamic
// export const dynamic = 'error';
/* ============ SSG END =============== */
