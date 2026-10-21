<script>
  import { _ } from 'svelte-i18n';
  import { CV_MAX_MB, CV_TYPES } from './schemas.js';

  let {
    file = $bindable(/** @type {File | null} */ (null)),
    accept = '.pdf,.doc,.docx',
    maxSizeMb = CV_MAX_MB,
    hint = '',
    error = $bindable('')
  } = $props();

  const ACCEPTED_TYPES = CV_TYPES;

  let dragging = $state(false);
  let inputEl = $state(/** @type {HTMLInputElement | null} */ (null));

  /** @param {File} f */
  function tryAccept(f) {
    const okType = ACCEPTED_TYPES.includes(f.type) || /\.(pdf|docx?|)$/i.test(f.name);
    if (!okType) {
      error = 'stage.fCvFileBadType';
      return;
    }
    if (f.size > maxSizeMb * 1024 * 1024) {
      error = 'stage.fCvFileTooBig';
      return;
    }
    error = '';
    file = f;
  }

  /** @param {DragEvent} e */
  function onDrop(e) {
    e.preventDefault();
    dragging = false;
    const f = e.dataTransfer?.files?.[0];
    if (f) tryAccept(f);
  }

  /** @param {Event} e */
  function onPick(e) {
    const f = /** @type {HTMLInputElement} */ (e.currentTarget).files?.[0];
    if (f) tryAccept(f);
  }

  function remove() {
    file = null;
    error = '';
    if (inputEl) inputEl.value = '';
  }

  /** @param {number} bytes */
  function fmtSize(bytes) {
    if (bytes < 1024) return bytes + ' o';
    if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + ' Ko';
    return (bytes / 1024 / 1024).toFixed(1) + ' Mo';
  }
</script>

<div>
  {#if !file}
    <button
      type="button"
      class="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center transition-colors {dragging
        ? 'border-g400 bg-g50'
        : 'border-ink/15 bg-paper hover:border-g400'}"
      ondragover={(e) => {
        e.preventDefault();
        dragging = true;
      }}
      ondragleave={() => (dragging = false)}
      ondrop={onDrop}
      onclick={() => inputEl?.click()}
    >
      <i class="ph ph-upload-simple text-3xl text-g400"></i>
      <p class="text-sm font-medium">{hint || $_('stage.fCvFileHint')}</p>
      <p class="text-xs text-n300">PDF, DOC, DOCX — {maxSizeMb} Mo max</p>
    </button>
  {:else}
    <div class="flex items-center justify-between gap-3 rounded-xl border border-g75 bg-g50 p-3">
      <div class="flex items-center gap-3 overflow-hidden">
        <i class="ph-fill ph-file-text text-2xl text-g400"></i>
        <div class="overflow-hidden">
          <p class="truncate text-sm font-medium">{file.name}</p>
          <p class="text-xs text-n300">{fmtSize(file.size)}</p>
        </div>
      </div>
      <button
        type="button"
        onclick={remove}
        aria-label={$_('stage.fCvFileRemove')}
        class="shrink-0 text-lg text-n300 hover:text-r300"
      >
        <i class="ph-bold ph-x"></i>
      </button>
    </div>
  {/if}

  <input bind:this={inputEl} type="file" {accept} class="hidden" onchange={onPick} />

  {#if error}
    <p class="pt-1 text-sm text-r300">{$_(error)}</p>
  {/if}
</div>
