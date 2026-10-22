<script>
  import { _, locale } from 'svelte-i18n';
  import { formatDate } from '$lib/content.js';
  /** @type {{ post: import('$lib/content.js').Post, showExcerpt?: boolean, feature?: boolean }} */
  let { post, showExcerpt = false, feature = false } = $props();
</script>

<article class="group">
  <a href="/blog/{post.slug}" class="block">
    <div class="overflow-hidden rounded-[24px] bg-cream">
      <img
        src={post.image}
        alt=""
        loading="lazy"
        class="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] {feature ? 'aspect-[16/10]' : 'aspect-[4/3]'}"
      />
    </div>
    <div class="flex flex-wrap items-center gap-x-3 gap-y-1 pt-5 text-xs font-bold uppercase tracking-[0.14em] text-ink/50">
      <span class="text-moss">{post.category}</span><span aria-hidden="true">·</span>
      <time datetime={post.date}>{formatDate(post.date, $locale)}</time>
    </div>
    <h3 class="pt-3 font-display tracking-tight transition-colors group-hover:text-moss {feature ? 'text-3xl md:text-4xl' : 'text-2xl'}" style="line-height:1.15">
      {post.title}
    </h3>
    {#if showExcerpt && post.excerpt}
      <p class="pt-3 text-ink/65">{post.excerpt}</p>
    {/if}
    <span class="t-link pt-4 text-sm">{$_('common.readArticle')} <i class="ph-bold ph-arrow-up-right"></i></span>
  </a>
</article>
