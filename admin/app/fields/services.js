import { t } from '../i18n/translater.js';

export const services = {
  name: 'items',
  label: t.fields.services,
  widget: 'relation',
  collection: 'services',
  multiple: true,
  search_fields: ['title'],
  value_field: '{{slug}}',
  display_fields: ['title'],
  required: false,
  i18n: true
};
