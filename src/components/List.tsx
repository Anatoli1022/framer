import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import { createClient } from '@/prismicio';
export const List = async () => {
  const client = createClient();
  const list = await client.getSingle('list');

  return <SliceZone slices={list.data.slices} components={components} />;
};
