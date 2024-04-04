import { type Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
/**
 * Props for `SectionLogos`.
 */
export type SectionLogosProps = SliceComponentProps<Content.SectionLogosSlice>;

/**
 * Component for "SectionLogos" Slices.
 */
const SectionLogos = ({ slice }: SectionLogosProps): JSX.Element => {
  console.log(slice);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='mt-14'
    >
      <div className="max-w-7xl ml-auto mr-auto items-center gap-x-6">
        <ul className="flex gap-x-14 justify-center">
          {slice.items.map((image, i) => {
            return (
              <li key={i}>
                <PrismicNextImage field={image.image} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SectionLogos;
