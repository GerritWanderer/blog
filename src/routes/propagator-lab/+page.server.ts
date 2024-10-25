import type { Propagator } from '$lib/types';

export async function load({ fetch }) {
  const response = await fetch('api/propagator');
  const propagator: Propagator[] = await response.json();
  return { propagator };
}
