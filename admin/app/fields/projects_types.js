import { t } from '../i18n/translater.js';

export const projects_types = {
  name: 'projects_types',
  label: t.fields.projects_types,
  widget: 'relation',
  collection: 'projects_types',
  search_fields: ['title'],
  value_field: 'title',
  display_fields: ['title'],
  required: false
};
