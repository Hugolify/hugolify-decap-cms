import { t } from '../i18n/translater.js';

export const realestates = {
  name: 'items',
  label: t.fields.realestates,
  widget: 'relation',
  collection: 'realestates',
  multiple: true,
  search_fields: ['title'],
  value_field: '{{slug}}',
  display_fields: ['title'],
  required: false,
  i18n: true
};
