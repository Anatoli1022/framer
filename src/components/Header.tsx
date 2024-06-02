import { createClient } from '@/prismicio';

import { Navigation } from '@/components/Navigation';

export default async function Header() {
  const client = createClient();

  return (
    <header className='pt-5'>
      <Navigation client={client} />
    </header>
  );
}
