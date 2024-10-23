import type { Propagator } from '$lib/types';
export async function getPropagator() {
  let propagator: Propagator[] = [];

  const paths = import.meta.glob('/src/propagator/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Propagator, 'slug'>;
      const post = { ...metadata, slug } satisfies Propagator;
      if (post.published) {
        propagator.push(post);
      }
    }
  }

  propagator = propagator.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  return propagator;
}
