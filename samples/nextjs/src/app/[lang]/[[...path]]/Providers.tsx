import { SitecorePageProps } from 'lib/page-props';
import { NextIntlClientProvider } from 'next-intl';

export const Providers = async (props: SitecorePageProps) => {
  const dict = {
    en: props.dictionary,
  };
  return (
    <div>
      <NextIntlClientProvider messages={dict}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        {props.children}
      </NextIntlClientProvider>
    </div>
  );
};
