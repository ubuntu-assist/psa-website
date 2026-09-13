<script>
  import { _ } from 'svelte-i18n';
  import { z } from 'zod';
  import { isValidPhoneNumber } from 'libphonenumber-js';
  import { superForm, defaults } from 'sveltekit-superforms';
  import { zod4 } from 'sveltekit-superforms/adapters';
  import { EMAIL, TEL_1, TEL_2, TEL_1_HREF, TEL_2_HREF, wa } from './data.js';
  import PhoneInput from './PhoneInput.svelte';

  // Error messages are i18n keys, resolved at render time.
  const schema = z.object({
    nom: z.string().min(2, 'validation.nomMin'),
    email: z.string().email('validation.emailInvalid'),
    tel: z
      .string()
      .optional()
      .default('')
      .refine((v) => !v || isValidPhoneNumber(v), 'validation.telInvalid'),
    message: z.string().min(10, 'validation.messageMin')
  });

  let done = $state(false);

  const { form, errors, enhance, submitting } = superForm(defaults(zod4(schema)), {
    SPA: true,
    validators: zod4(schema),
    validationMethod: 'auto',
    resetForm: false,
    onUpdate({ form }) {
      if (!form.valid) return;
      const d = form.data;
      const body =
        `${$_('contact.fNom')}: ${d.nom}\n` +
        `${$_('contact.fEmail')}: ${d.email}\n` +
        `${$_('contact.fTel')}: ${d.tel}\n\n${d.message}`;
      const subject = $_('contact.mailtoSubject', { values: { name: d.nom || 'visitor' } });
      window.location.href =
        `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=` + encodeURIComponent(body);
      done = true;
    }
  });

  function whatsappSend() {
    const d = $form;
    const body =
      `${$_('contact.fNom')}: ${d.nom}\n${$_('contact.fEmail')}: ${d.email}\n` +
      `${$_('contact.fTel')}: ${d.tel}\n\n${d.message}`;
    window.open(wa(body), '_blank');
  }
</script>

<section class="sbp-30">
  <div
    class="container -mt-40 rounded-xl bg-white p-2 sm:p-4 md:rounded-3xl md:p-15 lg:rounded-[60px]"
  >
    <div class="grid grid-cols-12 gap-6">
      <div
        class="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 text-center md:col-span-4 lg:p-10"
      >
        <div class="flex items-center justify-center rounded-full bg-g400/5 p-5 text-4xl !leading-none text-g400">
          <i class="ph-fill ph-map-pin"></i>
        </div>
        <h3 class="heading-4 pt-6">{$_('contact.locate')}</h3>
        <p class="pb-6 text-sm font-medium text-n300">{$_('contact.locateText')}</p>
        <a
          href="https://www.google.com/maps?q=Dschang,+Cameroun"
          target="_blank"
          rel="noopener"
          class="font-medium text-g400">{$_('common.seeOnMaps')}</a
        >
      </div>
      <div
        class="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 text-center md:col-span-4 lg:p-10"
      >
        <div class="flex items-center justify-center rounded-full bg-g400/5 p-5 text-4xl !leading-none text-g400">
          <i class="ph-fill ph-phone-call"></i>
        </div>
        <h3 class="heading-4 pt-6">{$_('contact.phone')}</h3>
        <p class="pb-6 text-sm font-medium text-n300">{$_('contact.phoneText')}</p>
        <div class="flex flex-col font-medium">
          <a href={TEL_1_HREF} class="hover:text-g400">{TEL_1}</a>
          <a href={TEL_2_HREF} class="hover:text-g400">{TEL_2}</a>
        </div>
      </div>
      <div
        class="col-span-12 flex flex-col items-center justify-center rounded-3xl border border-n30 p-6 text-center md:col-span-4 lg:p-10"
      >
        <div class="flex items-center justify-center rounded-full bg-g400/5 p-5 text-4xl !leading-none text-g400">
          <i class="ph-fill ph-envelope-simple"></i>
        </div>
        <h3 class="heading-4 pt-6">{$_('contact.email')}</h3>
        <p class="pb-6 text-sm font-medium text-n300">{$_('contact.emailText')}</p>
        <a href="mailto:{EMAIL}" class="font-medium">{EMAIL}</a>
      </div>
    </div>

    <div class="stp-15 grid grid-cols-12 gap-6">
      <div
        class="col-span-12 flex items-center justify-center self-stretch overflow-hidden rounded-3xl border border-n30 md:col-span-5"
      >
        <iframe
          title="Dschang"
          src="https://www.google.com/maps?q=Dschang,%20Cameroun&output=embed"
          class="h-full min-h-[320px] w-full"
          style="border:0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="col-span-12 rounded-3xl border border-n30 p-4 md:col-span-7 lg:p-15">
        <h3 class="heading-3 sbp-15 text-center">{$_('contact.formTitle')}</h3>

        {#if done}
          <p class="rounded-xl bg-g50 px-4 py-3 font-medium text-g400">{$_('contact.sent')}</p>
        {/if}

        <form class="grid grid-cols-12 gap-4 font-medium sm:gap-6" method="POST" use:enhance>
          <div class="col-span-12 lg:col-span-6">
            <input
              bind:value={$form.nom}
              name="nom"
              type="text"
              placeholder={$_('contact.fNom')}
              autocomplete="name"
              class="w-full rounded-xl border p-3 outline-none placeholder:text-n100 {$errors.nom
                ? 'border-r300'
                : 'border-n30 focus:border-g400'}"
            />
            {#if $errors.nom}
              <p class="pt-1 text-sm text-r300">{$_($errors.nom[0])}</p>
            {/if}
          </div>

          <div class="col-span-12 lg:col-span-6">
            <input
              bind:value={$form.email}
              name="email"
              type="email"
              placeholder={$_('contact.fEmail')}
              autocomplete="email"
              class="w-full rounded-xl border p-3 outline-none placeholder:text-n100 {$errors.email
                ? 'border-r300'
                : 'border-n30 focus:border-g400'}"
            />
            {#if $errors.email}
              <p class="pt-1 text-sm text-r300">{$_($errors.email[0])}</p>
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
              <p class="pt-1 text-sm text-r300">{$_($errors.tel[0])}</p>
            {/if}
          </div>

          <div class="col-span-12">
            <textarea
              bind:value={$form.message}
              name="message"
              placeholder={$_('contact.fMessage')}
              class="min-h-[120px] w-full rounded-xl border p-3 outline-none placeholder:text-n100 {$errors.message
                ? 'border-r300'
                : 'border-n30 focus:border-g400'}"
            ></textarea>
            {#if $errors.message}
              <p class="pt-1 text-sm text-r300">{$_($errors.message[0])}</p>
            {/if}
          </div>

          <div class="col-span-12 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={$submitting}
              class="relative flex items-center justify-center overflow-hidden rounded-xl bg-g400 px-8 py-3 font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-xl after:bg-y300 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] disabled:opacity-60"
            >
              <span class="relative z-10">{$_('contact.sendEmail')}</span>
            </button>
            <button
              type="button"
              onclick={whatsappSend}
              class="flex items-center gap-2 rounded-xl border border-g400 px-6 py-3 font-semibold text-g400 duration-300 hover:bg-g50"
            >
              <i class="ph-fill ph-whatsapp-logo"></i>
              {$_('contact.sendWhatsapp')}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
