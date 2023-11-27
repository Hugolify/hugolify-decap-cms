import { t } from '../i18n/translater.js';

export const text_markdown = {
  name: 'text',
  label: t.fields.text_markdown,
  widget: 'markdown',
  minimal: true,
  buttons: ['bold', 'italic', 'link', 'bulleted-list'],
  editor_components: [],
  modes: ['rich_text'],
  required: false,
  i18n: true
};
