import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const wildflower = await import(`../../wildflowers/${params.slug}.md`);

    return {
      content: wildflower.default,
      meta: wildflower.metadata
    };
  } catch (e) {
    error(404, `Could not find ${params.slug}`);
  }
}
