import { t } from '../i18n/translater.js';

export const realestates_persons = {
  name: 'realestates_persons',
  label: t.fields.realestates_persons.label,
  hint: t.fields.realestates_persons.hint,
  widget: 'relation',
  collection: 'persons',
  search_fields: ['title'],
  value_field: '{{filename}}',
  display_fields: ['title'],
  multiple: true,
  required: false,
  i18n: 'duplicate'
};
