import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicText } from '@prismicio/react';

import { List } from '@/components/List';
export type PricesSectionProps =
  SliceComponentProps<Content.PricesSectionSlice>;

const PricesSection = ({ slice }: PricesSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-44"
    >
      <div className="max-w-7xl ml-auto mr-auto ">
        <div className="text-center">
          <span className="text-xs font-medium py-2.5 px-3.5 border border-solid border-gray-300 rounded-lg">
            {slice.primary.span}
          </span>
        </div>

        <h2 className="ml-auto mr-auto text-6xl font-bold mt-5 max-w-2xl text-center">
          <PrismicText field={slice.primary.title} />
        </h2>
        <p className="ml-auto mr-auto text-xl font-normal mt-5 max-w-lg text-center">
          <PrismicText field={slice.primary.text} />
        </p>
        <ul className="flex mt-10  justify-center gap-x-6 items-end lg:flex-col lg:items-center lg:gap-y-6">
          <List />
        </ul>
      </div>
    </section>
  );
};

export default PricesSection;
