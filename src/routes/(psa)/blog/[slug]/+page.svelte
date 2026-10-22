<script>
  import { _, locale } from 'svelte-i18n';
  import BlogHero from '$lib/psa/BlogHero.svelte';
  import PostCard from '$lib/psa/PostCard.svelte';
  import Seo from '$lib/psa/Seo.svelte';
  import { reveal } from '$lib/psa/reveal.js';
  import { waSante, SITE_URL, BUSINESS } from '$lib/psa/data.js';
  import { getPosts, renderMarkdown, formatDate } from '$lib/content.js';

  let { data } = $props();

  const all = $derived(getPosts($locale));
  const post = $derived(all.find((p) => p.slug === data.slug));
  const others = $derived(all.filter((p) => p.slug !== data.slug).slice(0, 3));
  const html = $derived(post ? renderMarkdown(post.body) : '');
  const article = $derived(
    post && {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: SITE_URL + post.image,
      datePublished: post.date,
      inLanguage: String($locale || 'fr').slice(0, 2),
      mainEntityOfPage: SITE_URL + '/blog/' + post.slug,
      author: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
      publisher: { '@id': SITE_URL + '/#business' }
    }
  );
</script>

{#if post}
  <Seo
    title={post.title}
    description={post.excerpt}
    image={post.image}
    imageAlt={post.title}
    type="article"
    published={post.date}
    jsonld={article}
  />
{/if}

{#if post}
  <BlogHero title={post.title} crumb={post.category} subtitle={formatDate(post.date, $locale)} />

  <article class="pb-20 md:pb-28">
    <div class="container grid grid-cols-12 gap-y-10 lg:gap-x-10 pt-16">
      <aside class="col-span-12 lg:col-span-3">
        <div class="flex flex-col gap-4 text-sm lg:sticky lg:top-32">
          <img src={post.image} alt="" class="w-full rounded-[20px]" />
          <p><span class="block text-xs font-bold uppercase tracking-[0.14em] text-ink/50">{$_('blogPost.tag')}</span><span class="font-semibold text-moss">{post.category}</span></p>
          <p class="font-semibold"><time datetime={post.date}>{formatDate(post.date, $locale)}</time></p>
          <a href={waSante} target="_blank" rel="noopener" class="btn-primary self-start !px-5 !py-3">
            <i class="ph-fill ph-whatsapp-logo"></i>{$_('blogPost.ask')}
          </a>
        </div>
      </aside>

      <div class="col-span-12 lg:col-span-7 lg:col-start-5">
        <p class="font-display text-[26px] leading-[1.35] tracking-tight md:text-[30px]">{post.excerpt}</p>
        <div class="prose-psa">{@html html}</div>
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
