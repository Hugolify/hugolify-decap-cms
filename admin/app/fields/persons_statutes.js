import { t } from '../i18n/translater.js';

export const persons_statutes = {
  name: 'persons_statutes',
  label: t.fields.persons_statutes,
  widget: 'relation',
  collection: 'persons_statutes',
  search_fields: ['title'],
  value_field: 'title',
  display_fields: ['title'],
  multiple: false,
  required: true,
  i18n: 'duplicate'
};
