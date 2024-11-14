import { SitecorePageProps } from 'lib/page-props';
import { NextIntlClientProvider } from 'next-intl';

export const Providers = async (props: SitecorePageProps) => {
  return (
    <div>
      <NextIntlClientProvider messages={props.dictionary}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {props.children}
      </NextIntlClientProvider>
    </div>
  );
};
