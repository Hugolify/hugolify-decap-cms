import { heading } from '../fields/heading.js';
import { realestates } from '../fields/realestates.js';
import { show_more } from '../fields/show-more.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_selectedrealestates = {
  name: 'selected-realestates',
  label: t.blocks.selectedrealestates,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    { name: 'section', default: 'realestates', widget: 'hidden' },
    realestates,
    show_more,
    background
  ]
};
