import { t } from '../i18n/translater.js';

export const places = {
  name: 'items',
  label: t.fields.places_items,
  widget: 'relation',
  collection: 'places',
  search_fields: ['title'],
  value_field: '{{filename}}',
  display_fields: ['title'],
  multiple: true,
  required: false,
  i18n: 'duplicate'
};
