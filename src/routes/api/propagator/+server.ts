import { json } from '@sveltejs/kit';
import { getPropagator } from '$lib/propagator';

export async function GET() {
  const propagator = await getPropagator();
  return json(propagator);
}
