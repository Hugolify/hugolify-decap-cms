import { image_src } from './image-src.js';
import { image_alt } from './image-alt.js';
import { image_compression } from './image-compression.js';
import { legend } from './legend.js';
import { credit } from './credit.js';
import { screenshot } from './screenshot.js';
import { t } from '../i18n/translater.js';

export const figure = {
  name: 'figure',
  label: t.fields.figure,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [image_src, image_compression, legend, credit, image_alt, screenshot]
};
