import { t } from '../i18n/translater.js';

export const expertises = {
  name: 'items',
  label: t.fields.expertises_items,
  widget: 'relation',
  collection: 'expertises',
  search_fields: ['title'],
  value_field: '{{filename}}',
  display_fields: ['title'],
  multiple: true,
  required: false,
  i18n: 'duplicate'
};
