import { heading } from '../fields/heading.js';
import { pages } from '../fields/pages.js';
import { show_more } from '../fields/show-more.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_selectedpages = {
  name: 'selected-pages',
  label: t.blocks.selectedpages,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    { name: 'section', default: 'pages', widget: 'hidden' },
    pages,
    show_more,
    background
  ]
};
