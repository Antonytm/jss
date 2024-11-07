'use client';

import { useEffect, useState } from 'react';
import { handleEditorFastRefresh, SitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { SitecorePageProps } from 'lib/page-props';
import { IntlProvider } from 'next-intl';
import { componentFactory, editingComponentFactory } from 'temp/componentFactory';

export const Providers = (props: SitecorePageProps) => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Since Sitecore editors do not support Fast Refresh, need to refresh editor chromes after Fast Refresh finished
    handleEditorFastRefresh();
  }, []);

  if (clicked) {
    throw new Error('Oh no! Something went wrong.');
  }

  const isEditing = props.layoutData.sitecore.context.pageEditing;

  return (
    <div>
      <>
        <button
          onClick={() => {
            setClicked(true);
          }}
        >
          Throw error
        </button>
      </>
      <IntlProvider locale={props.locale} messages={props.dictionary}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <SitecoreContext
          componentFactory={isEditing ? editingComponentFactory : componentFactory}
          layoutData={props.layoutData}
        >
          {props.children}
        </SitecoreContext>
      </IntlProvider>
    </div>
  );
};
