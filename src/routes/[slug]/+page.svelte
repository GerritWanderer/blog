<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<section class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-12 mx-auto">
    <div class="max-w-[720px] mx-auto">
      <!-- Centering wrapper -->
      <div
        class="relative flex bg-clip-border rounded-xl bg-gray-800 shadow-md w-full max-w-[48rem] flex-row"
      >
        <div class="p-6">
          <h1
            class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal uppercase"
          >
            {data.meta.title}
          </h1>
          <article class="prose prose-pink">
            <svelte:component this={data.content} />
          </article>
        </div>
      </div>
    </div>
  </div>
</section>
