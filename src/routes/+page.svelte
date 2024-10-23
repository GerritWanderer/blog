<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let data;
</script>

<h1>Modern content sourced from my notes</h1>
<blockquote>
  Cherish each blossom, each idea that you sow, For in the field of the mind, a wildflower will
  grow. Connecting, exploring, in a fleeting display, A garden of thoughts that will bloom and then
  sway.
</blockquote>
<h2>Wildflowers</h2>
<p>
  My Wildflower field is a place were nature could settle down and give flowers the space to easily
  sprout, grow and build connections with other flowers and organisms on this field.
</p>
<section>
  <ul class="posts">
    {#each data.wildflowers as post}
      <li class="post">
        <a href={post.slug} class="title">{post.title}</a>
        <p class="date">{formatDate(post.date)}</p>
      </li>
    {/each}
  </ul>
</section>
<h2>Propagator</h2>
<section>
  <ul class="posts">
    {#each data.propagator as post}
      <li class="post">
        <a href={post.slug} class="title">{post.title}</a>
        <p class="date">{formatDate(post.date)}</p>
      </li>
    {/each}
  </ul>
</section>
<p>
  What kind of plant is this, where does it come from and which odor will the plant produce? Will in
  go into symbiose easy with wither organisms or not?
</p>
<p>
  An answer to these questions can only be found ifthe gardener transfers the plant into his own
  propagator, a place to study and learn from cultivar.
</p>
<h2>My Garden</h2>
