import { t } from '../i18n/translater.js';

export const persons = {
  name: 'items',
  label: t.fields.persons,
  widget: 'relation',
  collection: 'persons',
  search_fields: ['title'],
  value_field: '{{filename}}',
  display_fields: ['title'],
  multiple: true,
  required: false,
  i18n: 'duplicate'
};
