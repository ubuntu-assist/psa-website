<script>
  import { _ } from 'svelte-i18n';
  /** @type {{ post: { slug: string, image: string, titre: string, categorie: string, date: string, extrait?: string }, showExcerpt?: boolean }} */
  let { post, showExcerpt = false } = $props();
</script>

<article class="group col-span-12 sm:col-span-6 lg:col-span-4">
  <a href="/blog/{post.slug}" class="relative block">
    <img src="/assets/images/{post.image}" alt="" class="w-full rounded-xl" />
    <p class="absolute bottom-3 left-3 rounded-2xl bg-g75 px-6 py-2 text-sm font-medium text-n900">
      {post.categorie}
    </p>
  </a>
  <div class="rounded-2xl bg-r50 px-6 py-5 duration-500 group-hover:bg-bg2">
    <a href="/blog/{post.slug}">
      <h3 class="heading-4 pb-3">{post.titre}</h3>
    </a>
    {#if showExcerpt && post.extrait}
      <p class="pb-3 text-sm text-n500">{post.extrait}</p>
    {/if}
    <div class="flex items-center justify-between">
      <p class="text-sm font-medium text-n500">{post.date}</p>
      <a
        href="/blog/{post.slug}"
        aria-label={$_('common.readArticle')}
        class="flex items-center justify-center rounded-full bg-n900 p-2 text-2xl !leading-none text-white duration-500 group-hover:rotate-45 group-hover:bg-g400"
      >
        <i class="ph ph-arrow-up-right"></i>
      </a>
    </div>
  </div>
</article>
