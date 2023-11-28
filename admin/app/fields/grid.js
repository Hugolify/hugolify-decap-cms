import { t } from '../i18n/translater.js';

export const grid = {
  name: 'grid',
  label: t.fields.grid.label,
  widget: 'select',
  options: [
    { label: t.fields.grid.options.small, value: 'small' },
    { label: t.fields.grid.options.medium, value: 'medium' },
    { label: t.fields.grid.options.large, value: 'large' },
    { label: t.fields.grid.options.full, value: 'full' }
  ],
  default: 'large',
  required: true,
  i18n: 'duplicate'
};
