import { heading } from '../fields/heading.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_title = {
  name: 'title',
  label: t.blocks.title,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [heading, background]
};
