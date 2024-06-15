import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicText } from '@prismicio/react';
import { Shapes } from './shapes';
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
        <h2 className="text-6xl font-bold md:text-5xl sm:text-4xl">
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
              height={20}
              width={20}
              fallbackAlt=""
            />
          </PrismicNextLink>
        </div>
        <Shapes
          number={1}
          className={
            'w-[300px] h-[329px] absolute left-16 -top-10 lg:left-0 lg:top-10 lg:w-[200px] lg:h-[200px] md:top-20 md:w-[150px] md:h-[150px]  sm:top-30 '
          }
        />
        <Shapes
          number={2}
          className={
            'w-[300px] h-[329px] absolute right-16 top-10 lg:right-0 lg:top-30  lg:w-[200px] lg:h-[200px] md:top-40  md:w-[150px] md:h-[150px] '
          }
        />
      </div>
    </section>
  );
};

export default SignUpSection;
