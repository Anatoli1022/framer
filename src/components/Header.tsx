import { createClient } from '@/prismicio';

import { Navigation } from '@/components/Navigation';

export default async function Header() {
  const client = createClient();

  return (
    <header>
      <Navigation client={client} />
    </header>
  );
}
