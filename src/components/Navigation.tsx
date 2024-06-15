import { Client, Content, isFilled } from '@prismicio/client';
import { PrismicImage } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';
export const Navigation = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const navigation = await client.getSingle('navigation');

  return (
    <nav className=" max-w-7xl ml-auto mr-auto flex justify-between items-center">
      <PrismicNextLink field={navigation.data.logo_link}>
        <PrismicImage field={navigation.data.logo} />
      </PrismicNextLink>
      <ul className="flex gap-x-6 items-center sm:hidden">
        {isFilled.group(navigation.data.menu_items) &&
          navigation.data.menu_items.map((item) => {
            return (
              <li key={item.label}>
                <PrismicNextLink
                  className="text-black opacity-60 text-base hover:opacity-100 transition duration-300"
                  field={item.link}
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        <li>
          <PrismicNextLink
            className="text-white text-base px-4 py-2.5 border border-solid border-black rounded-xl bg-black hover:bg-transparent hover:text-black transition duration-300"
            field={navigation.data.get_free}
          >
            {navigation.data.label_get_free}
          </PrismicNextLink>
        </li>
      </ul>
    </nav>
  );
};
