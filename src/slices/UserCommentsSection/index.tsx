import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicText, PrismicImage } from '@prismicio/react';
/**
 * Props for `UserCommentsSection`.
 */
export type UserCommentsSectionProps =
  SliceComponentProps<Content.UserCommentsSectionSlice>;

/**
 * Component for "UserCommentsSection" Slices.
 */
const UserCommentsSection = ({
  slice,
}: UserCommentsSectionProps): JSX.Element => {
  return (
    <section
      className="mt-36 "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-7xl ml-auto mr-auto">
        <div className="text-center">
          <span className="text-xs font-medium py-2.5 px-3.5 border border-solid border-gray-300 rounded-lg">
            {slice.primary.span}
          </span>
        </div>
        <h2 className="text-center text-6xl font-bold mt-5">
          <PrismicText field={slice.primary.title} />
        </h2>
        <ul className=" flex flex-wrap gap-x-5 gap-y-6 mt-12 justify-center">
          {slice.items.map((item, i) => {
            return (
              <li
                key={i}
                className="p-9 max-w-xs rounded-3xl border border-solid border-gray-100 shadow-xl flex justify-center flex-col"
              >
                <p className="text-base font-normal">
                  <PrismicText field={item.text} />
                </p>
                <div className="flex items-center mt-5 gap-x-2">
                  <div>
                    <PrismicImage field={item.avatar} className="max-w-10" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium">
                      <PrismicText field={item.name} />
                    </h3>
                    <p className="text-base font-normal">
                      <PrismicText field={item.tegname} />
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default UserCommentsSection;
