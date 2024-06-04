import { t } from '../i18n/translater.js';

export const pages = {
  name: 'items',
  label: t.fields.pages,
  widget: 'relation',
  collection: 'pages',
  multiple: true,
  search_fields: ['title'],
  value_field: '{{title}}',
  display_fields: ['title'],
  required: false,
  i18n: true
};
