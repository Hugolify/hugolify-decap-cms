import { text } from '../fields/text.js';
import { url } from '../fields/url.js';
import { blank } from '../fields/blank.js';
import { t } from '../i18n/translater.js';

export const cta = {
  name: 'cta',
  label: t.fields.cta,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{text}}',
  fields: [text, url, blank]
};
