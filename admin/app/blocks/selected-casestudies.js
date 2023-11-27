import { heading } from '../fields/heading.js';
import { casestudies } from '../fields/casestudies.js';
import { show_more } from '../fields/show-more.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_selectedcasestudies = {
  name: 'selected-casestudies',
  label: t.blocks.selectedcasestudies,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    { name: 'section', default: 'casestudies', widget: 'hidden' },
    casestudies,
    show_more,
    background
  ]
};
