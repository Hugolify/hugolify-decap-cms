import { t } from '../i18n/translater.js';

export const products = {
  name: 'items',
  label: t.fields.products,
  widget: 'relation',
  collection: 'products',
  multiple: true,
  search_fields: ['title'],
  value_field: '{{slug}}',
  display_fields: ['title'],
  required: false,
  i18n: true
};
