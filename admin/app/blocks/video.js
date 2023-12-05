import { background } from '../fields/background.js';
import { grid } from '../fields/grid.js';
import { heading } from '../fields/heading.js';
import { t } from '../i18n/translater.js';
import { video } from '../fields/video.js';

export const block_video = {
  name: 'video',
  widget: 'object',
  label: t.blocks.video,
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    video,
    grid, 
    background
  ]
};
