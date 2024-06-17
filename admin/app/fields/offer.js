import { sold } from './sold.js';
import { price } from './price.js';
import { discount } from './discount.js';
import { text } from './text.js';
import { t } from '../i18n/translater.js';

export const offer = {
  name: 'offer',
  label: t.fields.offer,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [price, discount, sold, text]
};
