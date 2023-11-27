import { t } from '../i18n/translater.js';

export const body = {
  name: 'body',
  label: t.fields.body,
  widget: 'markdown',
  editor_components: ['button', 'figure', 'twitter', 'youtube'],
  required: false,
  i18n: true
};
