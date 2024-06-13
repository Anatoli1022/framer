import { Content } from '@prismicio/client';
import { PrismicText, SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  const mostPopular = slice.primary.most_popular === 'true';

  return (
    <li
      className={`p-10 rounded-3xl border border-solid border-gray-100 shadow-xl ${mostPopular ? 'bg-black' : ''}`}
    >
      <div>
        <div className="flex justify-between">
          <span className="text-lg font-bold text-slate-400">
            {slice.primary.span}
          </span>
          {mostPopular ? (
            <span className="text-sm  font-medium text-transparent bg-gradient-to-r from-purple-500 via-yellow-300  to-sky-500  bg-clip-text py-1 px-2 border border-solid border-gray-600 rounded-lg">
              {slice.primary.popular}
            </span>
          ) : null}
        </div>
        <div className="mt-9">
          <span
            className={`text-5xl font-bold ${mostPopular ? 'text-white' : 'text-black'}`}
          >
            {slice.primary.price}
          </span>
          <span className="text-lg font-bold text-slate-400">
            {slice.primary.spantext}
          </span>
        </div>
        <PrismicNextLink
          field={slice.primary.link}
          className={`block mt-8 text-base font-medium  text-center rounded-xl py-1 border border-solid duration-200 
       ${mostPopular ? 'text-black bg-white border-white hover:text-white hover:bg-transparent' : ' text-white bg-black border-black hover:text-black hover:bg-transparent'} `}
        >
          {slice.primary.label}
        </PrismicNextLink>
      </div>
      <ul className="mt-5">
        {slice.items.map((item, i) => {
          return (
            <li key={i} className="flex mt-5 first:mt-0">
              <PrismicNextImage
                field={slice.primary.image}
                className={` ${mostPopular ? 'invert' : ''}`}
                fallbackAlt=""
                width={14}
                height={20}
              />
              <p
                className={`ml-4 text-sm ${mostPopular ? 'text-white' : 'text-black'}`}
              >
                <PrismicText field={item.text} />
              </p>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Text;
