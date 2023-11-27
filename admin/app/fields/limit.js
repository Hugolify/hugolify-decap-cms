import { t } from '../i18n/translater.js';

export const limit = {
  name: 'limit',
  label: t.fields.limit.label,
  widget: 'number',
  required: true,
  default: 100,
  hint: t.fields.limit.hint,
  i18n: 'duplicate'
};
