<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<article>
  <!-- Title -->
  <hgroup>
    <h1>{data.meta.title}</h1>
    <p>Published at {formatDate(data.meta.date)}</p>
  </hgroup>

  <!-- Tags -->
  <div class="tags">
    {#each data.meta.categories as category}
      <span class="surface-4">&num;{category}</span>
    {/each}
  </div>

  <!-- Post -->
  <div class="prose">
    <svelte:component this={data.content} />
  </div>
</article>
