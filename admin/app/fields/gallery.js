import { image_src } from './image-src.js';
import { image_alt } from './image-alt.js';
import { credit } from './credit.js';
import { legend } from './legend.js';
import { t } from '../i18n/translater.js';

export const gallery = {
  name: 'gallery',
  label: t.fields.gallery,
  widget: 'list',
  i18n: true,
  fields: [image_src, image_alt, legend, credit]
};
