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
      name: 'dpe',
      label: t.fields.diagnostic.fields.dpe,
      widget: 'number',
      required: false,
      i18n: 'duplicate',
      value_type: 'float',
      min: 0
    },
    {
      name: 'ges',
      label: t.fields.diagnostic.fields.ges,
      widget: 'number',
      required: false,
      i18n: 'duplicate',
      value_type: 'float',
      min: 0
    }
  ]
};
