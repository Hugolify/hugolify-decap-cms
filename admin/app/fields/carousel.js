import { carousel_params } from './carousel-params.js';
import { carousel_responsive } from './carousel-responsive.js';
import { t } from '../i18n/translater.js';

export const carousel = {
  name: 'carousel',
  label: t.fields.carousel.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [carousel_params, carousel_responsive]
};
