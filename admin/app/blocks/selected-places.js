import { heading } from '../fields/heading.js';
import { places } from '../fields/places-items.js';
import { show_more } from '../fields/show-more.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_selectedplaces = {
  name: 'selected-places',
  label: t.blocks.selectedplaces,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [
    heading,
    { name: 'section', default: 'places', widget: 'hidden' },
    places,
    show_more,
    background
  ]
};
