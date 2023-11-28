import { heading } from '../fields/heading.js';
import { expertises } from '../fields/expertises-items.js';
import { show_more } from '../fields/show-more.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_selectedexpertises = {
  name: 'selected-expertises',
  label: t.blocks.selectedexpertises,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    { name: 'section', default: 'expertises', widget: 'hidden' },
    expertises,
    show_more,
    background
  ]
};
