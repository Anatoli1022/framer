// import { Content } from "@prismicio/client";
// import { SliceComponentProps } from "@prismicio/react";

// /**
//  * Props for `FooterItem`.
//  */
// export type FooterItemProps = SliceComponentProps<Content.FooterItemSlice>;

// /**
//  * Component for "FooterItem" Slices.
//  */
// const FooterItem = ({ slice }: FooterItemProps): JSX.Element => {
//   return (
//     <section
//       data-slice-type={slice.slice_type}
//       data-slice-variation={slice.variation}
//     >
//       Placeholder component for footer_item (variation: {slice.variation})
//       Slices
//     </section>
//   );
// };

// export default FooterItem;
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicText } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

/**
 * Props for `FooterItem`.
 */
export type FooterItemProps = SliceComponentProps<Content.FooterItemSlice>;

/**
 * Component for "FooterItem" Slices.
 */
const FooterItem = ({ slice }: FooterItemProps): JSX.Element => {
  return (
    <ul>
      <li>
        <h3 className="text-white">
          <PrismicText field={slice.primary.title} />
        </h3>
      </li>
      {slice.items.map((item, i) => {
        return (
          <li key={i} className="mt-5 first:mt-0">
            <PrismicNextLink
              className="text-gray-500 text-sm hover:text-gray-300 duration-200 "
              field={item.link}
            >
              {item.link_label}
            </PrismicNextLink>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterItem;
