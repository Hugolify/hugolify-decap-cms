import { breakpoints } from './breakpoints.js';
import { carousel_params } from './carousel-params.js';
import { t } from '../i18n/translater.js';

export const carousel_responsive = {
  name: 'responsive',
  label: t.fields.carousel.fields.responsive,
  widget: 'list',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [breakpoints, carousel_params]
};
