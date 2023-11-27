import { t } from '../i18n/translater.js';

export const realestates_categories = {
  name: 'realestates_categories',
  label: t.fields.realestates_categories,
  widget: 'relation',
  collection: 'realestates_categories',
  search_fields: ['title'],
  value_field: 'title',
  display_fields: ['title'],
  multiple: false,
  required: false,
  i18n: 'duplicate'
};
