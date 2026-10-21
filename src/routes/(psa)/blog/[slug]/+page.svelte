<script>
  import { _, json } from 'svelte-i18n';
  import BlogHero from '$lib/psa/BlogHero.svelte';
  import PostCard from '$lib/psa/PostCard.svelte';
  import { reveal } from '$lib/psa/reveal.js';
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
  <BlogHero title={post.titre} crumb={post.categorie} subtitle={post.date} />

  <article class="pb-20 md:pb-28">
    <div class="container grid grid-cols-12 gap-y-10 lg:gap-x-10 pt-16">
      <aside class="col-span-12 lg:col-span-3">
        <div class="flex flex-col gap-4 text-sm lg:sticky lg:top-32">
          <img src="/assets/images/{post.image}" alt="" class="w-full rounded-[20px]" />
          <p><span class="block text-xs font-bold uppercase tracking-[0.14em] text-ink/50">{$_('blogPost.tag')}</span><span class="font-semibold text-moss">{post.categorie}</span></p>
          <p class="font-semibold">{post.date}</p>
          <a href={waSante} target="_blank" rel="noopener" class="btn-primary self-start !px-5 !py-3">
            <i class="ph-fill ph-whatsapp-logo"></i>{$_('blogPost.ask')}
          </a>
        </div>
      </aside>

      <div class="col-span-12 lg:col-span-7 lg:col-start-5">
        <p class="font-display text-[26px] leading-[1.35] tracking-tight md:text-[30px]">{post.extrait}</p>
        {#each post.corps as bloc}
          {#if bloc.type === 'h'}
            <h2 class="t-h3 pb-4 pt-12">{bloc.text}</h2>
          {:else}
            <p class="pt-5 text-lg leading-[1.75] text-ink/80">{bloc.text}</p>
          {/if}
        {/each}
      </div>
    </div>
  </article>

  <section class="s-pad bg-cream">
    <div class="container">
      <h2 class="t-h2" use:reveal>{$_('common.readAlso')}</h2>
      <div class="grid gap-10 pt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {#each others as p, i}
          <div use:reveal={{ delay: i * 90 }}><PostCard post={p} /></div>
        {/each}
      </div>
    </div>
  </section>
{/if}
