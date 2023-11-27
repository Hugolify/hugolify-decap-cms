import { heading } from '../fields/heading.js';
import { figure } from '../fields/figure.js';
import { grid } from '../fields/grid.js';
import { offset } from '../fields/offset.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_figure = {
  name: 'figure',
  label: t.blocks.figure,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [heading, figure, grid, offset, background]
};
