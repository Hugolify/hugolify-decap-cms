import { t } from '../i18n/translater.js';

export const quote = {
  name: 'quote',
  label: t.fields.quote,
  widget: 'markdown',
  minimal: true,
  buttons: ['bold', 'italic', 'link'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true
};
