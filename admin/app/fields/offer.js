import { sold } from './sold.js';
import { price } from './price.js';
import { hide_price } from './hide_price.js';
import { status } from './realestates-status.js';
import { t } from '../i18n/translater.js';

export const offer = {
  name: 'offer',
  label: t.fields.offer,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [sold, hide_price, price, status]
};
