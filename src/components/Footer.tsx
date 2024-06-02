import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
import { PrismicText, PrismicLink, PrismicImage } from '@prismicio/react';
export const Footer = async () => {
  const client = createClient();
  const data = await client.getSingle('footer');

  return (
    <footer className="pt-10 pb-12 bg-black px-2">
      <div className="  max-w-7xl ml-auto mr-auto flex justify-between sm:flex-col">
        <div className="max-w-60">
          <PrismicLink field={data.data.logo_link}>
            <PrismicImage field={data.data.logo} />
          </PrismicLink>
          <p className="text-gray-400 text-sm mt-5">
            <PrismicText field={data.data.text} />
          </p>
          <ul className="mt-28 flex">
            {data.data.social_links.map((item, i) => {
              return (
                <li key={i} className="ml-4 first:ml-0">
                  <PrismicLink field={item.social_link}>
                    <PrismicImage field={item.image_link} className="w-6" />
                  </PrismicLink>
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
