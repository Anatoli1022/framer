import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { PrismicText } from '@prismicio/react';
import Shapes from './shapes';
import { RichText } from '../RichText';
import { PrismicNextLink } from '@prismicio/next';

export type HeroSectionProps = SliceComponentProps<Content.HeroSecrionSlice>;

const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-8 bg-gradient-to-b from-white to-blue-700  pb-11"
    >
      <div className="max-w-6xl ml-auto mr-auto flex justify-between items-center gap-x-6 lg:flex-wrap lg:justify-center">
        <div className="max-w-lg">
          <span className="text-xs font-medium border border-solid border-gray-400 rounded-lg py-2 px-3">
            {slice.primary.eyebrowheadline}
          </span>

          <RichText field={slice.primary.title} />

          <p className="text-2xl mt-7   font-normal">
            <PrismicText field={slice.primary.description} />
          </p>

          <div className="mt-7">
            <PrismicNextLink
              field={slice.primary.calltoactionlink}
              className="text-base font-medium text-white py-3 px-4 rounded-lg bg-black hover:text-black hover:bg-transparent transition duration-300 border border-black border-solid border-1"
            >
              {slice.primary.calltoactionlabel}
            </PrismicNextLink>
            <PrismicNextLink
              field={slice.primary.info}
              className="ml-4 text-base font-medium"
            >
              {slice.primary.infolabel}
            </PrismicNextLink>
          </div>
        </div>
        <div className="relative ">
          <Shapes className={''} number={1} />
          <Shapes className={'absolute top-0 -left-40'} number={2} />
          <Shapes className={'absolute bottom-0 -right-20'} number={2} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
