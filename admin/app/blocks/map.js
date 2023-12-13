import { heading } from '../fields/heading.js';
import { show_places } from '../fields/show-places.js';
import { map } from '../fields/map.js';
import { zoom } from '../fields/zoom.js';
import { grid } from '../fields/grid.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_map = {
  name: 'map',
  label: t.blocks.map,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [heading, show_places, map, zoom, grid, background]
};
