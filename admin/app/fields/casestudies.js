import { t } from '../i18n/translater.js';

export const casestudies = {
  name: 'items',
  label: t.fields.casestudies,
  widget: 'relation',
  collection: 'casestudies',
  multiple: true,
  search_fields: ['title'],
  value_field: '{{slug}}',
  display_fields: ['title'],
  required: false,
  i18n: true
};
