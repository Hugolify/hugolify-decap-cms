import { t } from '../i18n/translater.js';

export const direction = {
  name: 'direction',
  label: t.fields.direction.label,
  widget: 'select',
  options: [
    { label: t.fields.direction.options.ltr, value: 'ltr' },
    { label: t.fields.direction.options.rtl, value: 'rtl' }
  ],
  default: 'ltr',
  i18n: 'duplicate'
};
