import { Client, Content, isFilled } from '@prismicio/client';
import { PrismicLink } from '@prismicio/react';

export const Navigation = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
  const navigation = await client.getSingle('navigation');

  return (
    <nav className="pt-5 max-w-5xl ml-auto mr-auto flex justify-between">
      <div>logo</div>
      <ul className="flex gap-x-6">
        {isFilled.group(navigation.data.menu_items) &&
          navigation.data.menu_items.map((item) => {
            return (
              <li key={item.label} >
                <PrismicLink className="text-black opacity-60 text-base" field={item.link}>{item.label}</PrismicLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
