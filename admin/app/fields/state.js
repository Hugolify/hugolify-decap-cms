import { t } from '../i18n/translater.js';

export const state = {
  name: 'state',
  label: t.fields.state.label,
  widget: 'select',
  options: [
    { label: t.fields.state.options.light, value: 'light' },
    { label: t.fields.state.options.warning, value: 'warning' },
    { label: t.fields.state.options.danger, value: 'danger' }
  ],
  default: 'light',
  required: true,
  i18n: 'duplicate'
};
