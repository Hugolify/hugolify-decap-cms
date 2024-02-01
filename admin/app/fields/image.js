import { image_src } from './image-src.js';
import { image_alt } from './image-alt.js';
import { image_compression } from './image-compression.js';
import { t } from '../i18n/translater.js';

export const image = {
  name: 'image',
  label: t.fields.image,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [image_src, image_alt, image_compression]
};
