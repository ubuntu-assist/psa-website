<script>
  import { _, json } from 'svelte-i18n';
  import BlogHero from '$lib/psa/BlogHero.svelte';
  import PostCard from '$lib/psa/PostCard.svelte';
  import { posts as postsCfg } from '$lib/psa/data.js';

  const posts = $derived(
    /** @type {any[]} */ ($json('posts') || []).map((t) => ({
      ...postsCfg.find((c) => c.slug === t.slug),
      ...t
    }))
  );
</script>

<svelte:head>
  <title>{$_('blogPage.title')} — Pépinière Semences d'Avenir</title>
  <meta name="description" content={$_('blogPage.subtitle')} />
</svelte:head>

<BlogHero title={$_('blogPage.title')} />

<section class="sbp-30">
  <div
    class="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl md:p-15 lg:rounded-[60px]"
  >
    <div class="grid grid-cols-12 gap-6">
      {#each posts as post}
        <PostCard {post} showExcerpt />
      {/each}
    </div>
  </div>
</section>
