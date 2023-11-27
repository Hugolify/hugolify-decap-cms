import { t } from '../i18n/translater.js';

export const authors = {
  name: 'authors',
  label: t.fields.authors.label,
  hint: t.fields.authors.hint,
  widget: 'relation',
  collection: 'persons',
  search_fields: ['title'],
  value_field: '{{filename}}',
  display_fields: ['title'],
  multiple: true,
  required: false,
  i18n: 'duplicate'
};
