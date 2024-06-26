import { Content } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

/**
 * Props for `MoreEffective`.
 */
export type MoreEffectiveProps =
  SliceComponentProps<Content.MoreEffectiveSlice>;

/**
 * Component for "MoreEffective" Slices.
 */
const MoreEffective = ({ slice }: MoreEffectiveProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-36 bg-gradient-to-b from-white bg-indigo-200 pb-36"
    >
      <div className="max-w-7xl ml-auto mr-auto">
        <div className="text-center">
          <span className="text-xs font-medium py-2.5 px-3.5 border border-solid border-gray-300 rounded-lg">
            {slice.primary.span}
          </span>
        </div>
        <h2 className="ml-auto mr-auto text-6xl font-bold mt-5 max-w-2xl text-center md:text-5xl sm:text-4xl">
          <PrismicText field={slice.primary.title} />
        </h2>
        <p className="ml-auto mr-auto text-xl font-normal mt-5 max-w-lg text-center">
          <PrismicText field={slice.primary.text} />
        </p>
        <div className="mt-10 max-w-5xl mr-auto  ml-auto">
          <PrismicNextImage
            field={slice.primary.image}
            fallbackAlt=""
            sizes="100vw"
            width={1024}
            height={636}
          />
        </div>
        <ul className="flex mt-20 gap-5  lg:flex-wrap justify-center items-center">
          {slice.items.map((item, i) => {
            return (
              <li key={i} className="max-w-64">
                <PrismicNextImage
                  field={item.image}
                  className="w-4"
                  alt=""
                  width={16}
                  height={16}
                />
                <h3 className="mt-3 font-bold text-lg">
                  <PrismicText field={item.title} />
                </h3>
                <p className="mt-2 font-normal text-base">
                  <PrismicText field={item.text} />
                </p>
                <PrismicNextLink
                  field={item.link}
                  className="flex items-center mt-2"
                >
                  {item.label}
                  <PrismicNextImage
                    field={item.arrow}
                    className="block ml-2 w-5"
                    alt=""
                    width={20}
                    height={20}
                  />
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MoreEffective;
