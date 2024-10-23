import { json } from '@sveltejs/kit';
import { getWildflowers } from '$lib/wildflowers';

export async function GET() {
  const wildflowers = await getWildflowers();
  return json(wildflowers);
}
