<script>
  import { _, locale } from 'svelte-i18n';
  import { superForm, defaults } from 'sveltekit-superforms';
  import { zod4 } from 'sveltekit-superforms/adapters';
  import { EMAIL, TEL_1, TEL_2, TEL_1_HREF, TEL_2_HREF, wa, LINKS } from './data.js';
  import { contactSchema as schema } from './schemas.js';
  import PhoneInput from './PhoneInput.svelte';

  // idle → sending → sent | error  (emails go out through /api/contact → Resend)
  let status = $state(/** @type {'idle' | 'sending' | 'sent' | 'error'} */ ('idle'));
  let honeypot = $state('');

  const { form, errors, enhance, submitting } = superForm(defaults(zod4(schema)), {
    SPA: true,
    validators: zod4(schema),
    validationMethod: 'auto',
    resetForm: false,
    async onUpdate({ form }) {
      if (!form.valid) return;
      status = 'sending';
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ ...form.data, lang: ($locale || 'fr').slice(0, 2), website: honeypot })
        });
        if (!res.ok) throw new Error(String(res.status));
        status = 'sent';
        form.data = { ...form.data, message: '' };
      } catch {
        status = 'error';
      }
    }
  });

  /** fallback when sending fails: same content, opened in the visitor's mail client */
  const mailto = $derived(
    `mailto:${EMAIL}?subject=${encodeURIComponent($_('contact.mailtoSubject', { values: { name: $form.nom || 'visitor' } }))}&body=` +
      encodeURIComponent(body($form))
  );

  /** @param {any} d */
  function body(d) {
    return (
      `${$_('contact.fNom')}: ${d.nom}\n${$_('contact.fEmail')}: ${d.email}\n` +
      `${$_('contact.fTel')}: ${d.tel}\n\n${d.message}`
    );
  }

  function whatsappSend() {
    window.open(wa(body($form)), '_blank');
  }
</script>

<section class="s-pad">
  <div class="container grid grid-cols-12 gap-y-10 lg:gap-x-10 lg:gap-16">
    <!-- coordonnées -->
    <div class="col-span-12 lg:col-span-5">
      <ul class="border-t border-ink/15">
        <li class="border-b border-ink/15 py-7">
          <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/50"><i class="ph-bold ph-map-pin text-moss"></i>{$_('contact.locate')}</p>
          <p class="pt-3 font-display text-2xl tracking-tight">{$_('contact.locateText')}</p>
          <div class="flex flex-wrap gap-2 pt-4">
            <a href={LINKS.graines} target="_blank" rel="noopener" class="rounded-full bg-sage px-4 py-2 text-sm font-bold transition-colors hover:bg-forest hover:text-paper">{$_('contact.seeGraines')} ↗</a>
            <a href={LINKS.plantes} target="_blank" rel="noopener" class="rounded-full bg-sage px-4 py-2 text-sm font-bold transition-colors hover:bg-forest hover:text-paper">{$_('contact.seePlantes')} ↗</a>
          </div>
        </li>
        <li class="border-b border-ink/15 py-7">
          <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/50"><i class="ph-bold ph-phone text-moss"></i>{$_('contact.phone')}</p>
          <a href={TEL_1_HREF} class="t-link block pt-3 font-display text-2xl !font-normal tracking-tight">{TEL_1}</a>
          <a href={TEL_2_HREF} class="t-link block font-display text-2xl !font-normal tracking-tight">{TEL_2}</a>
          <p class="pt-2 text-sm text-ink/60">{$_('contact.phoneText')}</p>
        </li>
        <li class="border-b border-ink/15 py-7">
          <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-ink/50"><i class="ph-bold ph-envelope-simple text-moss"></i>{$_('contact.email')}</p>
          <a href="mailto:{EMAIL}" class="t-link block break-all pt-3 font-display text-2xl !font-normal tracking-tight">{EMAIL}</a>
          <p class="pt-2 text-sm text-ink/60">{$_('contact.emailText')}</p>
        </li>
      </ul>
      <div class="mt-8 overflow-hidden rounded-[24px] border border-ink/10">
        <iframe
          title="Dschang"
          src="https://www.google.com/maps?q=Dschang,%20Cameroun&output=embed"
          class="h-[280px] w-full grayscale-[60%]"
          style="border:0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <!-- formulaire -->
    <div class="pat-paper col-span-12 rounded-[32px] bg-cream p-6 sm:p-10 lg:col-span-7 lg:p-12">
      <h2 class="t-h2 pb-10">{$_('contact.formTitle')}</h2>

      {#if status === 'sent'}
        <p class="mb-6 flex items-start gap-2 rounded-2xl bg-sage px-4 py-3 font-semibold text-forest" role="status">
          <i class="ph-fill ph-check-circle mt-0.5 text-lg"></i>{$_('contact.sent')}
        </p>
      {:else if status === 'error'}
        <p class="mb-6 rounded-2xl bg-claysoft px-4 py-3 font-semibold text-ink" role="alert">
          {$_('contact.error')}
          <a href={mailto} class="underline">{$_('contact.errorEmail')}</a> ·
          <button type="button" class="underline" onclick={whatsappSend}>WhatsApp</button>
        </p>
      {/if}

        <form class="grid grid-cols-12 gap-4 font-medium sm:gap-6" method="POST" use:enhance>
          <!-- honeypot: invisible to people, filled by bots -->
          <div class="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
            <label>Website <input bind:value={honeypot} name="website" tabindex="-1" autocomplete="off" /></label>
          </div>
          <div class="col-span-12 lg:col-span-6">
            <input
              bind:value={$form.nom}
              name="nom"
              type="text"
              placeholder={$_('contact.fNom')}
              autocomplete="name"
              class="w-full rounded-2xl border bg-paper px-4 py-3.5 outline-none transition-colors placeholder:text-ink/40 {$errors.nom
                ? 'border-clay'
                : 'border-ink/10 focus:border-moss'}"
            />
            {#if $errors.nom}
              <p class="pt-1 text-sm text-clay">{$_($errors.nom[0])}</p>
            {/if}
          </div>

          <div class="col-span-12 lg:col-span-6">
            <input
              bind:value={$form.email}
              name="email"
              type="email"
              placeholder={$_('contact.fEmail')}
              autocomplete="email"
              class="w-full rounded-2xl border bg-paper px-4 py-3.5 outline-none transition-colors placeholder:text-ink/40 {$errors.email
                ? 'border-clay'
                : 'border-ink/10 focus:border-moss'}"
            />
            {#if $errors.email}
              <p class="pt-1 text-sm text-clay">{$_($errors.email[0])}</p>
            {/if}
          </div>

          <div class="col-span-12">
            <PhoneInput
              bind:value={$form.tel}
              name="tel"
              invalid={!!$errors.tel}
              placeholder={$_('contact.fTel')}
            />
            {#if $errors.tel}
              <p class="pt-1 text-sm text-clay">{$_($errors.tel[0])}</p>
            {/if}
          </div>

          <div class="col-span-12">
            <textarea
              bind:value={$form.message}
              name="message"
              placeholder={$_('contact.fMessage')}
              class="min-h-[120px] w-full rounded-2xl border bg-paper px-4 py-3.5 outline-none transition-colors placeholder:text-ink/40 {$errors.message
                ? 'border-clay'
                : 'border-ink/10 focus:border-moss'}"
            ></textarea>
            {#if $errors.message}
              <p class="pt-1 text-sm text-clay">{$_($errors.message[0])}</p>
            {/if}
          </div>

          <div class="col-span-12 flex flex-wrap gap-3">
            <button type="submit" disabled={$submitting || status === 'sending'} class="btn-primary disabled:opacity-60">
              {status === 'sending' ? $_('contact.sending') : $_('contact.sendEmail')}<span class="btn-ico"><i class="ph-bold ph-paper-plane-tilt"></i></span>
            </button>
            <button type="button" onclick={whatsappSend} class="btn-ghost">
              <i class="ph-fill ph-whatsapp-logo text-lg text-[#25D366]"></i>
              {$_('contact.sendWhatsapp')}
            </button>
          </div>
        </form>
    </div>
  </div>
</section>
