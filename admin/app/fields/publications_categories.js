import { t } from '../i18n/translater.js';

export const publications_categories = {
  name: 'publications_categories',
  label: t.fields.publications_categories,
  widget: 'relation',
  collection: 'publications_categories',
  search_fields: ['title'],
  value_field: 'title',
  display_fields: ['title'],
  required: false,
  i18n: 'duplicate'
};
