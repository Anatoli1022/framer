import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicText, PrismicImage, PrismicLink } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { List } from '@/components/List';
export type PricesSectionProps =
  SliceComponentProps<Content.PricesSectionSlice>;

const PricesSection = ({ slice }: PricesSectionProps): JSX.Element => {
  const client = createClient();
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
        <ul className="flex mt-10  justify-center gap-x-6 items-end">
          {slice.items.map((item, i) => {
            const isSecondItem = i === 1;
            return (
              <li
                key={i}
                className={`p-10 rounded-3xl border border-solid border-gray-100 shadow-xl ${isSecondItem ? 'bg-black' : ''}`}
              >
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-slate-400">
                    {item.span}
                  </span>
                  {isSecondItem ? (
                    <span className="text-sm  font-medium text-transparent bg-gradient-to-r from-purple-500 via-yellow-300  to-sky-500  bg-clip-text py-1 px-2 border border-solid border-gray-600 rounded-lg">
                      {slice.primary.popular}
                    </span>
                  ) : null}
                </div>
                <div className="mt-9">
                  <span
                    className={`text-5xl font-bold ${isSecondItem ? 'text-white' : 'text-black'}`}
                  >
                    {item.price}
                  </span>
                  <span className="text-lg font-bold text-slate-400">
                    {item.spantext}
                  </span>
                </div>
                <PrismicLink
                  field={item.link}
                  className={`block mt-8 text-base font-medium  text-center rounded-xl py-1 border border-solid duration-200 
                  ${isSecondItem ? 'text-black bg-white border-white hover:text-white hover:bg-black' : ' text-white bg-black border-black hover:text-black hover:bg-white'} `}
                >
                  {item.label}
                </PrismicLink>

                <List client={client} index={i} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PricesSection;
