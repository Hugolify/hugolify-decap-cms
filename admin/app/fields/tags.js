import { t } from '../i18n/translater.js';

export const tags = {
  name: 'tags',
  label: t.fields.tags,
  widget: 'relation',
  collection: 'tags',
  search_fields: ['title'],
  value_field: 'title',
  display_fields: ['title'],
  required: false,
  multiple: true,
  i18n: 'duplicate'
};
