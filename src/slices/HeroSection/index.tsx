import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { PrismicText, PrismicLink } from '@prismicio/react';

export type HeroSectionProps = SliceComponentProps<Content.HeroSecrionSlice>;

const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  console.log(slice);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-between mt-8 bg-gradient-to-bl from-blue-100 to-blue-900 "
    >
      <div className="max-w-7xl ml-auto mr-auto ">
        <div className="max-w-lg">
          <span className="text-xs font-medium border border-solid border-gray-300 rounded-lg py-2 px-3">
            {slice.primary.eyebrowheadline}
          </span>
          <h1 className="text-8xl mt-7 font-bold ">
            <PrismicText field={slice.primary.title} />
          </h1>

          <p className="text-2xl mt-7 text-base font-normal">
            <PrismicText field={slice.primary.description} />
          </p>

          <div className="mt-7">
            <PrismicLink
              field={slice.primary.calltoactionlink}
              className="text-base font-medium text-white py-3 px-4 rounded-lg bg-black hover:text-black hover:bg-white transition duration-300 border border-black border-solid border-1"
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
        <div>af</div>
      </div>
    </section>
  );
};

export default HeroSection;
