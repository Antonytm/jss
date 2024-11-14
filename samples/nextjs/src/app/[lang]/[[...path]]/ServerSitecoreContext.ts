import { SitecorePageProps } from 'lib/page-props';
import { atom } from 'nanostores';

export const $pageProps = atom<SitecorePageProps>(null);

const setServerContext = function (pageProps: SitecorePageProps) {
  $pageProps.set(pageProps);
};

const getServerContext = function (): SitecorePageProps {
  return $pageProps.get();
};

export { setServerContext, getServerContext };
