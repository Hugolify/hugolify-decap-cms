import { icon } from './icon.js';
import { title } from './title.js';
import { text } from './text.js';
import { t } from '../i18n/translater.js';

export const keyfeatures = {
  name: 'keyfeatures',
  label: t.fields.keyfeatures.label,
  hint: t.fields.keyfeatures.hint,
  widget: 'list',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [icon, title, text]
};
