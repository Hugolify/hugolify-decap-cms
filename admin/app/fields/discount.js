import { t } from '../i18n/translater.js';

export const discount = {
  name: 'discount',
  label: t.fields.discount.label,
  hint: t.fields.discount.hint,
  widget: 'string',
  pattern: ['^[0-9]*(%?)$', t.fields.discount.pattern],
  required: false,
  i18n: 'duplicate'
};
