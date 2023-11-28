import { image_src } from './image-src.js';
import { image_alt } from './image-alt.js';
import { credit } from './credit.js';
import { legend } from './legend.js';
import { half } from './half.js';
import { t } from '../i18n/translater.js';

export const images = {
  name: 'images',
  label: t.fields.images,
  widget: 'list',
  collapse: false,
  i18n: true,
  fields: [image_src, image_alt, credit, legend, half]
};
