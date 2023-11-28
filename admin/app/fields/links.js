import { sublinks } from './sublinks.js';
import { title } from './title.js';
import { url } from './url.js';
import { blank } from './blank.js';
import { t } from '../i18n/translater.js';

export const links = {
  name: 'links',
  label: t.fields.links.label,
  label_singular: t.fields.links.label_singular,
  widget: 'list',
  i18n: true,
  required: false,
  fields: [title, url, blank, sublinks]
};
