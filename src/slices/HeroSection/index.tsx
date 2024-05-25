import { Content } from '@prismicio/client';
import { PrismicImage, SliceComponentProps } from '@prismicio/react';

import { PrismicText, PrismicLink } from '@prismicio/react';
import Shapes from './shapes';

export type HeroSectionProps = SliceComponentProps<Content.HeroSecrionSlice>;

const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-8 bg-gradient-to-b from-white to-blue-700  pb-11"
    >
      <div className="max-w-7xl ml-auto mr-auto flex justify-between items-center gap-x-6">
        <div className="max-w-lg">
          <span className="text-xs font-medium border border-solid border-gray-400 rounded-lg py-2 px-3">
            {slice.primary.eyebrowheadline}
          </span>
          <h1 className="text-8xl mt-7 font-bold ">
            <PrismicText field={slice.primary.title} />
          </h1>

          <p className="text-2xl mt-7   font-normal">
            <PrismicText field={slice.primary.description} />
          </p>

          <div className="mt-7">
            <PrismicLink
              field={slice.primary.calltoactionlink}
              className="text-base font-medium text-white py-3 px-4 rounded-lg bg-black hover:text-black hover:bg-transparent transition duration-300 border border-black border-solid border-1"
            >
              {slice.primary.calltoactionlabel}
            </PrismicLink>
            <PrismicLink
              field={slice.primary.info}
              className="ml-4 text-base font-medium"
            >
              {slice.primary.infolabel}
            </PrismicLink>
          </div>
        </div>
        <div className="relative">
          <Shapes className={''} number={1} />
          <Shapes className={'absolute top-0 -left-40'} number={2} />
          <Shapes className={'absolute bottom-0 -right-0'} number={3} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
