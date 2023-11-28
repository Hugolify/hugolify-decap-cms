import { t } from '../i18n/translater.js';

export const align = {
  name: 'align',
  label: t.fields.align.label,
  widget: 'select',
  options: [
    { label: t.fields.align.options.start, value: 'start' },
    { label: t.fields.align.options.end, value: 'end' },
    { label: t.fields.align.options.center, value: 'center' }
  ],
  default: 'start',
  required: false,
  i18n: 'duplicate'
};
