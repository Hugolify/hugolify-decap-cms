import { t } from '../i18n/translater.js';

export const diagnostic = {
  name: 'diagnostic',
  label: t.fields.diagnostic.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
    {
      name: 'kwh',
      label: t.fields.diagnostic.fields.epd,
      widget: 'number',
      required: false,
      i18n: 'duplicate',
      value_type: 'float',
      min: 0
    },
    {
      name: 'co2',
      label: t.fields.diagnostic.fields.ghg,
      widget: 'number',
      required: false,
      i18n: 'duplicate',
      value_type: 'float',
      min: 0
    }
  ]
};
