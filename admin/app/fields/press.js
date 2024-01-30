import { title } from './title.js';
import { url } from './url.js';
import { t } from '../i18n/translater.js';

export const press = {
  name: 'press',
  label: t.fields.press,
  widget: 'object',
  collapsed: false,
  required: false,
  i18n: true,
  fields: [title, url]
};
