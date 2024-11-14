import { SiteInfo } from './middleware';
import { DictionaryPhrases, LayoutServiceData } from '@sitecore-jss/sitecore-jss-react';
import { ComponentPropsCollection } from './sharedTypes/component-props';
import { Redirect } from 'next/dist/lib/load-custom-routes';
import { HTMLLink } from '@sitecore-jss/sitecore-jss';

export type SitecorePageProps = {
  site: SiteInfo;
  locale: string;
  dictionary: DictionaryPhrases;
  componentProps: ComponentPropsCollection;
  notFound: boolean;
  layoutData: LayoutServiceData;
  redirect?: Redirect;
  headLinks: HTMLLink[];
};

export let $pageProps: SitecorePageProps = {
  site: { name: '', hostName: '', language: '' },
  locale: '',
  dictionary: {},
  componentProps: {},
  notFound: false,
  layoutData: {
    sitecore: {
      context: {},
      route: null,
    },
  },
  headLinks: [],
};

const setServerContext = function(pageProps: SitecorePageProps) {
  $pageProps = pageProps;
};

const getServerContext = function(): SitecorePageProps {
  return $pageProps;
};

export { setServerContext, getServerContext };
