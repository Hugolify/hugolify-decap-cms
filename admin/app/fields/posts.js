import { t } from '../i18n/translater.js';

export const posts = {
  name: 'items',
  label: t.fields.posts,
  widget: 'relation',
  collection: 'posts',
  multiple: true,
  search_fields: ['title'],
  value_field: '{{slug}}',
  display_fields: ['title'],
  required: false,
  i18n: true
};
