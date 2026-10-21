<script>
  import { _, json, locale } from 'svelte-i18n';
  import { superForm, defaults } from 'sveltekit-superforms';
  import { zod4 } from 'sveltekit-superforms/adapters';
  import { wa } from './data.js';
  import { internshipSchema as schema } from './schemas.js';
  import PhoneInput from './PhoneInput.svelte';
  import FileDropzone from './FileDropzone.svelte';


  // Fields that belong to each step of the wizard (drives validation-before-advance
  // and is balanced so every step carries a similar amount of content).
  const STEP_FIELDS = /** @type {const} */ ([
    ['nom', 'email', 'tel', 'ville'],
    ['niveau', 'etablissement', 'experience'],
    ['domaine', 'competences', 'langues'],
    ['periode', 'source', 'cv'],
    ['motivation', 'question']
  ]);

  const domaines = $derived(/** @type {string[]} */ ($json('stage.domaines') || []));
  const sourceOptions = $derived(/** @type {string[]} */ ($json('stage.sourceOptions') || []));
  const stepLabels = $derived(/** @type {string[]} */ ($json('stage.steps') || []));
  // idle → sending → sent | error | tooBig  (emails go out through /api/candidature → Resend)
  let status = $state(/** @type {'idle' | 'sending' | 'sent' | 'error' | 'tooBig'} */ ('idle'));
  let honeypot = $state('');
  let step = $state(0);

  // The CV file lives outside the zod schema; it is sent as multipart form data
  // alongside the fields and attached to the email by the server.
  let cvFile = $state(/** @type {File | null} */ (null));
  let cvFileError = $state('');

  const { form, errors, enhance, submitting, validate } = superForm(defaults(zod4(schema)), {
    SPA: true,
    validators: zod4(schema),
    validationMethod: 'auto',
    resetForm: false,
    async onUpdate({ form }) {
      if (!form.valid) return;
      status = 'sending';
      const fd = new FormData();
      for (const [k, v] of Object.entries(form.data)) fd.append(k, String(v ?? ''));
      fd.append('lang', ($locale || 'fr').slice(0, 2));
      fd.append('website', honeypot);
      if (cvFile) fd.append('cvFile', cvFile, cvFile.name);
      try {
        const res = await fetch('/api/candidature', { method: 'POST', body: fd });
        if (res.status === 413) return void (status = 'tooBig');
        if (!res.ok) throw new Error(String(res.status));
        status = 'sent';
      } catch {
        status = 'error';
      }
    }
  });

  $effect(() => {
    if (!$form.domaine && domaines.length) $form.domaine = domaines[0];
  });
  $effect(() => {
    if (!$form.source && sourceOptions.length) $form.source = sourceOptions[0];
  });

  async function next() {
    const fields = STEP_FIELDS[step];
    const results = await Promise.all(fields.map((f) => validate(f, { update: 'errors' })));
    const hasError = results.some((r) => r && r.length > 0);
    if (!hasError) step = Math.min(step + 1, STEP_FIELDS.length - 1);
  }

  function back() {
    step = Math.max(step - 1, 0);
  }

  /** @param {any} d */
  function body(d) {
    const lines = [
      [$_('stage.fNom'), d.nom],
      [$_('stage.fEmail'), d.email],
      [$_('stage.fTel'), d.tel],
      [$_('stage.fVille'), d.ville],
      [$_('stage.fNiveau'), d.niveau],
      [$_('stage.fEtablissement'), d.etablissement],
      [$_('stage.fDomaine'), d.domaine],
      [$_('stage.fCompetences'), d.competences],
      [$_('stage.fLangues'), d.langues],
      [$_('stage.fPeriode'), d.periode],
      [$_('stage.fSource'), d.source],
      [$_('stage.fCvFile'), cvFile ? cvFile.name : ''],
      [$_('stage.fCv'), d.cv]
    ]
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');

    const extra = [
      d.experience && `${$_('stage.fExperience')}:\n${d.experience}`,
      d.question && `${$_('stage.fQuestion')}:\n${d.question}`
    ]
      .filter(Boolean)
      .join('\n\n');

    return `${lines}\n\n${$_('stage.fMotivation')}:\n${d.motivation}` + (extra ? `\n\n${extra}` : '');
  }

  function whatsappSend() {
    window.open(wa($_('stage.waIntro') + '\n\n' + body($form)), '_blank');
  }

  // « Terroir » fields: paper boxes with a hairline border, moss focus ring.
  const fieldBase = 'w-full rounded-2xl border border-ink/10 bg-paper px-4 py-3.5 outline-none';
  const iconFieldBase =
    'flex items-center justify-start gap-3 rounded-2xl border border-ink/10 bg-paper px-4 py-3.5 text-ink/50 has-[input:focus]:border-moss';
  const iconInput = 'w-full bg-transparent text-ink outline-none placeholder:font-medium placeholder:text-ink/40';
  const labelBase = 'block pb-2 text-xs font-bold uppercase tracking-[0.12em] text-ink/60';
  /** @param {unknown} err */
  const ring = (err) => (err ? 'border-clay' : 'focus:border-moss');
  /** @param {string} current @param {string} value */
  const chip = (current, value) =>
    `rounded-full px-4 py-2.5 text-sm font-semibold duration-300 ${
      current === value ? 'bg-forest text-paper' : 'border border-ink/10 bg-paper hover:border-forest'
    }`;
</script>

<div class="grid grid-cols-12 items-start gap-6">
  <!-- Steps sidebar (working-processed design) -->
  <div class="col-span-12 md:col-span-4 xl:col-span-3 xl:col-start-2">
    <div class="rounded-[28px] bg-cream p-4 sm:p-8">
      <ul class="flex flex-col gap-8">
        {#each stepLabels as label, i}
          <li class="relative">
            {#if i === step}
              <div class="flex w-full items-center justify-start gap-4 rounded-full bg-paper p-2">
                <div class="flex items-center justify-center rounded-full bg-moss p-2 !leading-none text-paper">
                  <i class="ph-bold ph-check"></i>
                </div>
                <p class="text-sm font-medium">{label}</p>
              </div>
            {:else if i < step}
              <button
                type="button"
                onclick={() => (step = i)}
                class="flex w-full items-center justify-start gap-4 rounded-full p-2 text-left"
              >
                <div
                  class="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-g400 text-sm !leading-none text-g400"
                >
                  {i + 1}
                </div>
                <p class="text-sm font-medium text-g400">{label}</p>
              </button>
            {:else}
              <div class="flex w-full items-center justify-start gap-4 rounded-full p-2">
                <div
                  class="flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-n300 text-sm !leading-none text-n300"
                >
                  {i + 1}
                </div>
                <p class="text-sm font-medium text-n300">{label}</p>
              </div>
            {/if}
            {#if i < stepLabels.length - 1}
              <span
                class="absolute left-[26px] top-full h-6 border-l-2 border-dotted {i < step
                  ? 'border-g400'
                  : 'border-n30'}"
              ></span>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Step content (exact working-processed field styling: bg-n30 filled inputs) -->
  <div class="col-span-12 md:col-span-8 xl:col-span-6 xl:col-start-6">
    <form
      class="rounded-[32px] bg-cream p-6 font-medium sm:p-10"
      method="POST"
      use:enhance
    >
      <!-- honeypot: invisible to people, filled by bots -->
      <div class="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>Website <input bind:value={honeypot} name="website" tabindex="-1" autocomplete="off" /></label>
      </div>

      {#if status === 'sent'}
        <p class="mb-6 flex items-start gap-2 rounded-2xl bg-sage px-4 py-3 font-semibold text-forest" role="status">
          <i class="ph-fill ph-check-circle mt-0.5 text-lg"></i>{$_('stage.sent')}
        </p>
      {:else if status === 'error' || status === 'tooBig'}
        <p class="mb-6 rounded-2xl bg-claysoft px-4 py-3 font-semibold text-ink" role="alert">
          {$_(status === 'tooBig' ? 'stage.errorTooBig' : 'stage.error')}
        </p>
      {/if}

      <h4 class="heading-4">{stepLabels[step]}</h4>

      <div class="flex flex-col gap-6 pt-6 lg:pt-10">
        {#if step === 0}
          <div>
            <label class={labelBase} for="nom">{$_('stage.fNom')}*</label>
            <input
              bind:value={$form.nom}
              id="nom"
              name="nom"
              type="text"
              autocomplete="name"
              placeholder={$_('stage.fNomPh')}
              class="{fieldBase} {ring($errors.nom)}"
            />
            {#if $errors.nom}<p class="pt-1 text-sm text-r300">{$_($errors.nom[0])}</p>{/if}
          </div>

          <div>
            <label class={labelBase} for="email">{$_('stage.fEmail')}*</label>
            <div class="{iconFieldBase} {$errors.email ? 'ring-2 ring-r300' : ''}">
              <i class="ph-bold ph-envelope-simple"></i>
              <input
                bind:value={$form.email}
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder={$_('stage.fEmailPh')}
                class={iconInput}
              />
            </div>
            {#if $errors.email}<p class="pt-1 text-sm text-r300">{$_($errors.email[0])}</p>{/if}
          </div>

          <div>
            <label class={labelBase} for="tel">{$_('stage.fTel')}*</label>
            <PhoneInput
              bind:value={$form.tel}
              id="tel"
              name="tel"
              invalid={!!$errors.tel}
              placeholder={$_('stage.fTelPh')}
            />
            {#if $errors.tel}<p class="pt-1 text-sm text-r300">{$_($errors.tel[0])}</p>{/if}
          </div>

          <div>
            <label class={labelBase} for="ville">{$_('stage.fVille')}</label>
            <div class={iconFieldBase}>
              <i class="ph-bold ph-map-pin"></i>
              <input
                bind:value={$form.ville}
                id="ville"
                name="ville"
                type="text"
                placeholder={$_('stage.fVillePh')}
                class={iconInput}
              />
            </div>
          </div>
        {:else if step === 1}
          <div>
            <label class={labelBase} for="niveau">{$_('stage.fNiveau')}*</label>
            <div class="{iconFieldBase} {$errors.niveau ? 'ring-2 ring-r300' : ''}">
              <i class="ph-bold ph-graduation-cap"></i>
              <input
                bind:value={$form.niveau}
                id="niveau"
                name="niveau"
                type="text"
                placeholder={$_('stage.fNiveauPh')}
                class={iconInput}
              />
            </div>
            {#if $errors.niveau}<p class="pt-1 text-sm text-r300">{$_($errors.niveau[0])}</p>{/if}
          </div>

          <div>
            <label class={labelBase} for="etablissement">{$_('stage.fEtablissement')}</label>
            <div class={iconFieldBase}>
              <i class="ph-bold ph-buildings"></i>
              <input
                bind:value={$form.etablissement}
                id="etablissement"
                name="etablissement"
                type="text"
                placeholder={$_('stage.fEtablissementPh')}
                class={iconInput}
              />
            </div>
          </div>

          <div>
            <label class={labelBase} for="experience">{$_('stage.fExperience')}</label>
            <textarea
              bind:value={$form.experience}
              id="experience"
              name="experience"
              placeholder={$_('stage.fExperiencePh')}
              class="min-h-[120px] {fieldBase} focus:ring-2 focus:ring-g400"
            ></textarea>
          </div>
        {:else if step === 2}
          <div>
            <p class={labelBase}>{$_('stage.fDomaine')}</p>
            <div class="flex flex-wrap gap-2">
              {#each domaines as d}
                <button type="button" class={chip($form.domaine, d)} onclick={() => ($form.domaine = d)}>
                  {d}
                </button>
              {/each}
            </div>
          </div>

          <div>
            <label class={labelBase} for="competences">{$_('stage.fCompetences')}</label>
            <textarea
              bind:value={$form.competences}
              id="competences"
              name="competences"
              placeholder={$_('stage.fCompetencesPh')}
              class="min-h-[120px] {fieldBase} focus:ring-2 focus:ring-g400"
            ></textarea>
          </div>

          <div>
            <label class={labelBase} for="langues">{$_('stage.fLangues')}</label>
            <div class={iconFieldBase}>
              <i class="ph-bold ph-translate"></i>
              <input
                bind:value={$form.langues}
                id="langues"
                name="langues"
                type="text"
                placeholder={$_('stage.fLanguesPh')}
                class={iconInput}
              />
            </div>
          </div>
        {:else if step === 3}
          <div>
            <label class={labelBase} for="periode">{$_('stage.fPeriode')}</label>
            <div class={iconFieldBase}>
              <i class="ph-bold ph-calendar-blank"></i>
              <input
                bind:value={$form.periode}
                id="periode"
                name="periode"
                type="text"
                placeholder={$_('stage.fPeriodePh')}
                class={iconInput}
              />
            </div>
          </div>

          <div>
            <p class={labelBase}>{$_('stage.fSource')}</p>
            <div class="flex flex-wrap gap-2">
              {#each sourceOptions as s}
                <button type="button" class={chip($form.source, s)} onclick={() => ($form.source = s)}>
                  {s}
                </button>
              {/each}
            </div>
          </div>

          <div>
            <p class={labelBase}>{$_('stage.fCvFile')}</p>
            <FileDropzone bind:file={cvFile} bind:error={cvFileError} />
            <p class="pt-2 text-xs text-n300">{$_('stage.fCvFileNote')}</p>
          </div>

          <div>
            <label class={labelBase} for="cv">{$_('stage.fCv')}</label>
            <div class="{iconFieldBase} {$errors.cv ? 'ring-2 ring-r300' : ''}">
              <i class="ph-bold ph-link-simple"></i>
              <input
                bind:value={$form.cv}
                id="cv"
                name="cv"
                type="url"
                inputmode="url"
                placeholder={$_('stage.fCvPh')}
                class={iconInput}
              />
            </div>
            {#if $errors.cv}<p class="pt-1 text-sm text-r300">{$_($errors.cv[0])}</p>{/if}
          </div>
        {:else}
          <div>
            <label class={labelBase} for="motivation">{$_('stage.fMotivation')}*</label>
            <textarea
              bind:value={$form.motivation}
              id="motivation"
              name="motivation"
              placeholder={$_('stage.fMotivationPh')}
              class="min-h-[160px] {fieldBase} {ring($errors.motivation)}"
            ></textarea>
            {#if $errors.motivation}
              <p class="pt-1 text-sm text-r300">{$_($errors.motivation[0])}</p>
            {/if}
          </div>

          <div>
            <label class={labelBase} for="question">{$_('stage.fQuestion')}</label>
            <textarea
              bind:value={$form.question}
              id="question"
              name="question"
              placeholder={$_('stage.fQuestionPh')}
              class="min-h-[160px] {fieldBase} focus:ring-2 focus:ring-g400"
            ></textarea>
          </div>
        {/if}
      </div>

      <div class="stp-15 flex items-center justify-between gap-4">
        {#if step > 0}
          <button
            type="button"
            onclick={back}
            class="relative flex w-full items-center justify-center overflow-hidden rounded-full bg-n30 px-4 py-2 text-lg font-medium duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-y300 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)] lg:px-8 lg:py-3"
          >
            <span class="relative z-10">{$_('stage.back')}</span>
          </button>
        {/if}

        {#if step < STEP_FIELDS.length - 1}
          <button
            type="button"
            onclick={next}
            class="btn-primary w-full"
          >
            <span class="relative z-10">{$_('stage.next')}</span>
          </button>
        {:else}
          <button
            type="submit"
            disabled={$submitting || status === 'sending' || status === 'sent'}
            class="btn-primary w-full disabled:opacity-60"
          >
            <span class="relative z-10">{status === 'sending' ? $_('stage.sending') : $_('stage.submit')}</span>
          </button>
        {/if}
      </div>

      {#if step === STEP_FIELDS.length - 1}
        <button
          type="button"
          onclick={whatsappSend}
          class="btn-ghost mt-3 w-full"
        >
          <i class="ph-fill ph-whatsapp-logo"></i>
          {$_('stage.submitWa')}
        </button>
      {/if}
    </form>
  </div>
</div>
