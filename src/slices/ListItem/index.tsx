import { Content } from '@prismicio/client';
import { PrismicImage, SliceComponentProps } from '@prismicio/react';
import { PrismicText, PrismicLink } from '@prismicio/react';
/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  // console.log(slice);
  const mostPopular = slice.primary.mostpopular === 'true';

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`p-10 rounded-3xl border border-solid border-gray-100 shadow-xl ${mostPopular ? 'bg-black' : ''}`}
    >
      <ul>
        <li>
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
          <PrismicLink
            field={slice.primary.link}
            className={`block mt-8 text-base font-medium  text-center rounded-xl py-1 border border-solid duration-200 
       ${mostPopular ? 'text-black bg-white border-white hover:text-white hover:bg-black' : ' text-white bg-black border-black hover:text-black hover:bg-white'} `}
          >
            {slice.primary.label}
          </PrismicLink>
        </li>
        {slice.items.map((item, i) => {
          return (
            <li key={i} className="flex mt-5 first:mt-0">
              <PrismicImage
                field={slice.primary.image}
                className={` ${mostPopular ? 'invert' : ''}`}
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
    </section>
  );
};

export default Text;
