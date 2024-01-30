import { t } from '../i18n/translater.js';

export const products_categories = {
  name: 'products_categories',
  label: t.fields.products_categories,
  widget: 'relation',
  collection: 'products_categories',
  search_fields: ['title'],
  value_field: 'title',
  display_fields: ['title'],
  required: false,
  multiple: true,
  i18n: 'duplicate'
};
