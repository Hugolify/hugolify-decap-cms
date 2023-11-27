import { image_src } from './image-src.js';
import { image_alt } from './image-alt.js';
import { credit } from './credit.js';
import { t } from '../i18n/translater.js';

export const featured_image = {
  name: 'image',
  label: t.fields.featured_image,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [image_src, image_alt, credit]
};
