<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<section class="relative h-auto flex flex-col overflow-hidden">
  <div class="w-full max-w-6xl mx-auto px-4 md:px-6">
    <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
      <div class="w-full max-w-3xl mx-auto">
        <!-- Vertical Timeline #1 -->
        <div class="-my-6">
          <!-- Item #1 -->
          {#each data.wildflowers as post}
            <a href="/{post.slug}" class="block relative pl-8 sm:pl-32 py-6 group">
              <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
              <div
                class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-2 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[7rem] after:-translate-x-1/2 after:translate-y-1.5"
              >
                <time
                  class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-24 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full"
                  >{formatDate(post.date)}</time
                >
                <div class="text-xl font-bold text-white">{post.title}</div>
              </div>
              <div class="text-slate-500">{post.description}</div>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
