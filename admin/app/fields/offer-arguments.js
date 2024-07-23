import { icon } from './icon.js';
import { text } from './text.js';
import { t } from '../i18n/translater.js';

export const offer_arguments = {
  name: 'arguments',
  label: t.fields.arguments.label,
  label_singular: t.fields.arguments.label_singular,
  widget: 'list',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{text}}',
  fields: [icon, text]
};
