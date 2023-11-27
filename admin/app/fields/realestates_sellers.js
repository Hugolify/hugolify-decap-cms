import { t } from '../i18n/translater.js';

export const realestates_sellers = {
  name: 'realestates_sellers',
  label: t.fields.realestates_sellers,
  widget: 'relation',
  collection: 'realestates_sellers',
  search_fields: ['title'],
  value_field: 'title',
  display_fields: ['title'],
  multiple: false,
  required: false,
  i18n: 'duplicate'
};
