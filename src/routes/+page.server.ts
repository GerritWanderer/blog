import type { Wildflower } from '$lib/types';

export async function load({ fetch }) {
  let response;

  response = await fetch('api/wildflowers');
  const wildflowers: Wildflower[] = await response.json();
  response = await fetch('api/propagator');
  const propagator: Propagator[] = await response.json();
  return { wildflowers, propagator };
}
