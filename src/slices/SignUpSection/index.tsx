import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicText } from '@prismicio/react';
import Shapes from './shapes';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

export type SignUpSectionProps =
  SliceComponentProps<Content.SignUpSectionSlice>;

const SignUpSection = ({ slice }: SignUpSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-gradient-to-b from-white bg-indigo-200 mt-28 pb-28 "
    >
      <div className="max-w-7xl ml-auto mr-auto text-center relative">
        <h2 className="text-6xl font-bold">
          <PrismicText field={slice.primary.title} />
        </h2>
        <p className="text-xl font-normal mt-5 ml-auto mr-auto max-w-xl ">
          <PrismicText field={slice.primary.text} />
        </p>
        <div className="mt-10 flex justify-center">
          <PrismicNextLink
            field={slice.primary.get}
            className="text-base font-medium text-white py-3 px-4 rounded-lg bg-black hover:text-black hover:bg-transparent transition duration-300 border border-black border-solid border-1"
          >
            {slice.primary.getlabel}
          </PrismicNextLink>
          <PrismicNextLink
            field={slice.primary.learn}
            className="flex items-center ml-4 text-base font-medium"
          >
            {slice.primary.labellearn}
            <PrismicNextImage
              field={slice.primary.arrow}
              className="align-middle block ml-2"
              sizes="20px"
              fallbackAlt=""
            />
          </PrismicNextLink>
        </div>
        <Shapes
          number={1}
          className={'absolute left-16 -top-10 lg:left-0 md:top-20 sm:top-40'}
        />
        <Shapes
          number={2}
          className={'absolute right-16 top-10 lg:right-0 md:top-40 sm:top-72'}
        />
      </div>
    </section>
  );
};

export default SignUpSection;
