import { t } from '../i18n/translater.js';

export const zoom = {
  name: 'zoom',
  label: t.fields.zoom,
  widget: 'number',
  min: 1,
  default: 13,
  max: 20,
  required: true,
  i18n: 'duplicate'
};
