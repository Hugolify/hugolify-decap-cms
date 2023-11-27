import { background } from '../fields/background.js';
import { heading } from '../fields/heading.js';
import { services } from '../fields/services.js';
import { show_more } from '../fields/show-more.js';
import { t } from '../i18n/translater.js';

export const block_selectedservices = {
  name: 'selected-services',
  label: t.blocks.selectedservices,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    { name: 'section', default: 'services', widget: 'hidden' },
    services,
    show_more,
    background
  ]
};
