import { Field, Text, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Placeholder from 'components/Placeholder';

type StyleguideSectionProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

/**
 * Represents a category of styleguide specimens within the Styleguide-Layout.
 * Usage examples are added to the `styleguide-section` placeholder that this
 * exposes.
 */
const StyleguideSection = (props: StyleguideSectionProps): JSX.Element => (
  <div className="pt-3" id={`i${props.rendering.uid && props.rendering.uid.replace(/[{}]/g, '')}`}>
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/*@ts-ignore*/}
    <Text className="border-bottom" field={props.fields.heading} tag="h3" />
    <Placeholder name="jss-styleguide-section" rendering={props.rendering} />
  </div>
);

export default withDatasourceCheck()<StyleguideSectionProps>(StyleguideSection);
