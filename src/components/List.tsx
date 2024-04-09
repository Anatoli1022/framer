

import { Client, Content } from '@prismicio/client';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';

export const List = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}): Promise<JSX.Element> => {
 
  const list = await client.getSingle('list');

  return <SliceZone slices={list.data.slices} components={components} />;
};
