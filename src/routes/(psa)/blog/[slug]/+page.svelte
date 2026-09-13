<script>
  import { _, json } from 'svelte-i18n';
  import BlogHero from '$lib/psa/BlogHero.svelte';
  import PostCard from '$lib/psa/PostCard.svelte';
  import { posts as postsCfg, waSante } from '$lib/psa/data.js';

  let { data } = $props();

  const allPosts = $derived(
    /** @type {any[]} */ ($json('posts') || []).map((t) => ({
      ...postsCfg.find((c) => c.slug === t.slug),
      ...t
    }))
  );
  const post = $derived(allPosts.find((p) => p.slug === data.slug));
  const others = $derived(allPosts.filter((p) => data.otherSlugs.includes(p.slug)));
</script>

<svelte:head>
  <title>{post?.titre} — {$_('nav.blog')} · Pépinière Semences d'Avenir</title>
  <meta name="description" content={post?.extrait} />
</svelte:head>

{#if post}
  <BlogHero title={post.titre} crumb={post.categorie} />

  <article>
    <div
      class="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl md:px-15 md:pt-15 lg:rounded-[60px]"
    >
      <img src="/assets/images/{post.image}" alt="" class="w-full rounded-3xl" />

      <p class="pt-10 text-lg font-medium text-n400">{post.categorie} · {post.date}</p>
      <h2 class="display-4 pb-5 pt-3 font-extrabold">{post.titre}</h2>

      {#each post.corps as bloc}
        {#if bloc.type === 'h'}
          <h3 class="heading-3 stp-15 pb-4">{bloc.text}</h3>
        {:else}
          <p class="pb-4 text-base text-n300 sm:text-lg">{bloc.text}</p>
        {/if}
      {/each}

      <div class="stp-15">
        <div
          class="flex flex-wrap items-center justify-between gap-6 border-y border-n30 py-4 max-lg:flex-col max-lg:items-start"
        >
          <div class="flex items-center gap-4 max-sm:flex-col max-sm:items-start">
            <p class="heading-5">{$_('blogPost.tag')}</p>
            <span class="rounded-xl border border-n40 px-4 py-2 text-n300">{post.categorie}</span>
          </div>
          <a
            href={waSante}
            target="_blank"
            rel="noopener"
            class="flex items-center gap-2 rounded-full bg-g400 px-6 py-3 font-semibold text-white duration-300 hover:bg-g300"
          >
            <i class="ph-fill ph-whatsapp-logo"></i>
            {$_('blogPost.ask')}
          </a>
        </div>
      </div>
    </div>

    <section class="stp-30 sbp-30">
      <div class="container">
        <h2 class="heading-2 pb-8 font-bold">{$_('common.readAlso')}</h2>
        <div class="grid grid-cols-12 gap-6">
          {#each others as p}
            <PostCard post={p} />
          {/each}
        </div>
      </div>
    </section>
  </article>
{/if}
