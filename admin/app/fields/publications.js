import { t } from '../i18n/translater.js';

export const publications = {
  name: 'items',
  label: t.fields.publications,
  widget: 'relation',
  collection: 'publications',
  multiple: true,
  search_fields: ['title'],
  value_field: '{{slug}}',
  display_fields: ['title'],
  required: false,
  i18n: true
};
