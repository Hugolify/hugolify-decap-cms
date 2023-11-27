import { t } from '../i18n/translater.js';

export const projects_tags = {
  name: 'projects_tags',
  label: t.fields.projects_tags,
  widget: 'relation',
  collection: 'projects_tags',
  search_fields: ['title'],
  value_field: 'title',
  display_fields: ['title'],
  required: false,
  multiple: true
};
