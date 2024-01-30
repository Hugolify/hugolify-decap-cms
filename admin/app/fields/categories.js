import { t } from '../i18n/translater.js';

export const categories = {
  name: 'categories',
  label: t.fields.categories,
  widget: 'relation',
  collection: 'categories',
  search_fields: ['title'],
  value_field: 'title',
  display_fields: ['title'],
  required: false,
  i18n: 'duplicate'
};
