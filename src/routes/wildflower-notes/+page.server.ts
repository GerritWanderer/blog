import type { Wildflower } from '$lib/types';

export async function load({ fetch }) {
  const response = await fetch('api/wildflowers');
  const wildflowers: Wildflower[] = await response.json();
  return { wildflowers };
}
