import { t } from '../i18n/translater.js';

export const offset = {
  name: 'offset',
  label: t.fields.offset.label,
  widget: 'select',
  options: [
    { label: t.fields.offset.options.start, value: 'start' },
    { label: t.fields.offset.options.end, value: 'end' },
    { label: t.fields.offset.options.center, value: 'center' }
  ],
  default: 'start',
  required: false,
  i18n: 'duplicate'
};
