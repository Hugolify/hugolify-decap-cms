import { t } from '../i18n/translater.js';
import { price } from './price.js';
import { unit } from './unit.js';

export const price_per_unit = {
  name: 'price_per_unit',
  label: t.fields.price_per_unit.label,
  hint: t.fields.price_per_unit.hint,
  widget: 'object',
  required: false,
  i18n: false,
  fields: [price, unit]
};
