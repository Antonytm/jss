import { PlaceholderComponentProps } from '@sitecore-jss/sitecore-jss-nextjs';
import { componentFactory } from './../../temp/componentFactory';
import React from 'react';

export function Placeholder(props: PlaceholderComponentProps) {
  const components = props.rendering.placeholders[props.name];

  return (
    <>
      {components.map((x) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const Component = componentFactory(x.componentName);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        return <Component {...x} rendering={x} key={x.uid} />;
      })}
    </>
  );
}
