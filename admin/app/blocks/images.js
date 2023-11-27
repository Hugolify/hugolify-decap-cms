import { heading } from '../fields/heading.js';
import { images } from '../fields/images.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_images = {
  name: 'images',
  label: t.blocks.images,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [heading, images, background]
};
