import { t } from '../i18n/translater.js';

export const projects = {
  name: 'items',
  label: t.fields.projects,
  widget: 'relation',
  collection: 'projects',
  multiple: true,
  search_fields: ['title'],
  value_field: '{{slug}}',
  display_fields: ['title'],
  required: false,
  i18n: true
};
