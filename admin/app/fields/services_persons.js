import { t } from '../i18n/translater.js';

export const services_persons = {
  name: 'services_persons',
  label: t.fields.services_persons.label,
  hint: t.fields.services_persons.hint,
  widget: 'relation',
  collection: 'persons',
  search_fields: ['title'],
  value_field: '{{filename}}',
  display_fields: ['title'],
  multiple: true,
  required: false,
  i18n: 'duplicate'
};
