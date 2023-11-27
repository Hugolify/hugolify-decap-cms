import { heading } from '../fields/heading.js';
import { section } from '../fields/section.js';
import { count } from '../fields/count.js';
import { show_more } from '../fields/show-more.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_latest = {
  name: 'latest',
  label: t.blocks.latest,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [heading, section, count, show_more, background]
};
