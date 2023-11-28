import { t } from '../i18n/translater.js';

export const layout = {
  name: 'layout',
  label: t.fields.layout.label,
  widget: 'select',
  options: [
    { label: t.fields.layout.options.carousel, value: 'carousel' },
    { label: t.fields.layout.options.grid, value: 'grid' }
  ],
  default: 'grid',
  i18n: 'duplicate'
};
