import { t } from '../i18n/translater.js';

export const services_categories = {
  name: 'services_categories',
  label: t.fields.services_categories,
  widget: 'relation',
  collection: 'services_categories',
  search_fields: ['title'],
  value_field: 'title',
  display_fields: ['title'],
  required: false,
  i18n: 'duplicate'
};
