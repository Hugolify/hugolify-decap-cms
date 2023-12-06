import { t } from '../i18n/translater.js';

export const persons_expertises = {
  name: 'persons_expertises',
  label: t.fields.persons_expertises,
  widget: 'relation',
  collection: 'expertises',
  search_fields: ['title'],
  value_field: '{{filename}}',
  display_fields: ['title'],
  multiple: true,
  required: false,
  i18n: 'duplicate'
};
