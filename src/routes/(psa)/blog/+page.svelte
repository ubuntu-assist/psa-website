<script>
  import { _, locale } from 'svelte-i18n';
  import BlogHero from '$lib/psa/BlogHero.svelte';
  import PostCard from '$lib/psa/PostCard.svelte';
  import Seo from '$lib/psa/Seo.svelte';
  import { reveal } from '$lib/psa/reveal.js';
  import { getPosts, formatDate } from '$lib/content.js';

  const posts = $derived(getPosts($locale));
</script>

<Seo title={$_('blogPage.title')} description={$_('seo.blog')} image="/og/blog.jpg" />

<BlogHero title={$_('blogPage.title')} subtitle={$_('blogPage.subtitle')} image="/assets/images/psa/stock/catalogue-agri.jpg" />

<section class="s-pad">
  <div class="container">
    {#if posts[0]}
      <a href="/blog/{posts[0].slug}" class="group grid items-center gap-8 lg:grid-cols-2 lg:gap-16" use:reveal>
        <div class="overflow-hidden rounded-[32px]">
          <img src={posts[0].image} alt="" class="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        </div>
        <div>
          <p class="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-ink/50">
            <span class="text-moss">{posts[0].category}</span>·<time datetime={posts[0].date}>{formatDate(posts[0].date, $locale)}</time>
          </p>
          <h2 class="t-h2 pt-5 transition-colors group-hover:text-moss">{posts[0].title}</h2>
          <p class="t-lead pt-5">{posts[0].excerpt}</p>
          <span class="btn-primary mt-8">{$_('common.readArticle')}<span class="btn-ico"><i class="ph-bold ph-arrow-right"></i></span></span>
        </div>
      </a>
    {/if}

    <div class="grid gap-10 border-t border-ink/10 pt-16 mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      {#each posts.slice(1) as post, i}
        <div use:reveal={{ delay: i * 90 }}><PostCard {post} showExcerpt /></div>
      {/each}
    </div>
  </div>
</section>
