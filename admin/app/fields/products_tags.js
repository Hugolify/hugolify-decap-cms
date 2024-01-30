import { t } from '../i18n/translater.js';

export const products_tags = {
  name: 'products_tags',
  label: t.fields.products_tags,
  widget: 'relation',
  collection: 'products_tags',
  search_fields: ['title'],
  value_field: 'title',
  display_fields: ['title'],
  required: false,
  multiple: true,
  i18n: 'duplicate'
};
