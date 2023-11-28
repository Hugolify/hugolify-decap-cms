import { t } from '../i18n/translater.js';

export const publications_persons = {
  name: 'publications_persons',
  label: t.fields.publications_persons.label,
  hint: t.fields.publications_persons.hint,
  widget: 'relation',
  collection: 'persons',
  search_fields: ['title'],
  value_field: '{{filename}}',
  display_fields: ['title'],
  multiple: true,
  required: false,
  i18n: 'duplicate'
};
