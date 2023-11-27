import { title } from './title.js';
import { url } from './url.js';
import { blank } from './blank.js';
import { t } from '../i18n/translater.js';

export const sublinks = {
  name: 'links',
  label: t.fields.sublinks.label,
  label_singular: t.fields.sublinks.label_singular,
  widget: 'list',
  i18n: true,
  required: false,
  fields: [title, url, blank]
};
