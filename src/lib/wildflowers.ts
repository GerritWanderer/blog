import type { Wildflower } from '$lib/types';
export async function getWildflowers() {
  let wildflowers: Wildflower[] = [];

  const paths = import.meta.glob('/src/wildflowers/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Wildflower, 'slug'>;
      const post = { ...metadata, slug } satisfies Wildflower;
      if (post.published) {
        wildflowers.push(post);
      }
    }
  }

  wildflowers = wildflowers.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  return wildflowers;
}
