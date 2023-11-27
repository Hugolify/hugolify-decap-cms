import { heading } from '../fields/heading.js';
import { publications } from '../fields/publications.js';
import { show_more } from '../fields/show-more.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_selectedpublications = {
  name: 'selected-publications',
  label: t.blocks.selectedpublications,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    { name: 'section', default: 'publications', widget: 'hidden' },
    publications,
    show_more,
    background
  ]
};
