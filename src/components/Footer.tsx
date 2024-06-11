import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { PrismicText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
export const Footer = async () => {
  const client = createClient();
  const data = await client.getSingle('footer');

  return (
    <footer className="pt-10 pb-12 bg-black px-2">
      <div className="  max-w-7xl ml-auto mr-auto flex justify-between sm:flex-col">
        <div className="max-w-60">
          <PrismicNextLink field={data.data.logo_link}>
            <PrismicNextImage field={data.data.logo} alt="" sizes="24px" />
          </PrismicNextLink>
          <p className="text-gray-400 text-sm mt-5">
            <PrismicText field={data.data.text} />
          </p>
          <ul className="mt-28 flex">
            {data.data.social_links.map((item, i) => {
              return (
                <li key={i} className="ml-4 first:ml-0">
                  <PrismicNextLink field={item.social_link}>
                    <PrismicNextImage
                      field={item.image_link}
                      className="w-6"
                      fallbackAlt=""
                      sizes="24px"
                    />
                  </PrismicNextLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-16 lg:gap-10  sm:flex-wrap sm:mt-6">
          <SliceZone slices={data.data.slices} components={components} />
        </div>
      </div>
    </footer>
  );
};
