import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicText } from '@prismicio/react';
import Shapes from './shapes'
/**
 * Props for `StreamlinedSection`.
 */
export type StreamlinedSectionProps =
  SliceComponentProps<Content.StreamlinedSectionSlice>;

/**
 * Component for "StreamlinedSection" Slices.
 */
const StreamlinedSection = ({
  slice,
}: StreamlinedSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-24"
    >
      <div className="max-w-7xl ml-auto mr-auto text-center">
        <span className="text-xs font-medium py-2.5 px-3.5 border border-solid border-gray-300 rounded-lg">
          {slice.primary.span}
        </span>{' '}
        <h2 className="text-6xl font-bold mt-6 ml-auto mr-auto max-w-2xl">
          <PrismicText field={slice.primary.title} />
        </h2>
        <p className="text-xl font-normal mt-5 ml-auto mr-auto max-w-lg">
          <PrismicText field={slice.primary.text} />
        </p>
        <ul className="flex justify-center gap-x-4 mt-16 lg:flex-col lg:items-center lg:gap-y-6">
          {slice.items.map((item, i) => {
            return (
              <li
                key={i}
                className="p-10 rounded-3xl border border-solid border-gray-100 shadow-xl"
              >
             <Shapes index={i}/>
                <h3 className="text-2xl font-bold">
                  <PrismicText field={item.title} />
                </h3>
                <p className="text-xl font-normal mt-4 ml-auto mr-auto max-w-96">
                  <PrismicText field={item.text} />
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default StreamlinedSection;
