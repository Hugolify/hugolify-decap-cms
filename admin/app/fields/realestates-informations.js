import { t } from '../i18n/translater.js';

export const informations = {
  name: 'informations',
  label: t.fields.informations.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [
    {
      name: 'year',
      label: t.fields.informations.fields.year,
      widget: 'datetime',
      required: false,
      i18n: 'duplicate',
      date_format: 'YYYY',
      time_format: false
    },
    {
      name: 'district',
      label: t.fields.informations.fields.district,
      widget: 'string',
      required: false,
      i18n: true
    },
    {
      name: 'area',
      label: t.fields.informations.fields.area.label,
      hint: t.fields.informations.fields.area.hint,
      widget: 'number',
      required: false,
      i18n: 'duplicate',
      min: 0
    },
    {
      name: 'field',
      label: t.fields.informations.fields.field.label,
      hint: t.fields.informations.fields.field.hint,
      widget: 'number',
      required: false,
      i18n: 'duplicate',
      min: 0
    },
    {
      name: 'levels',
      label: t.fields.informations.fields.levels,
      widget: 'number',
      required: false,
      i18n: 'duplicate',
      min: 0
    },
    {
      name: 'floor',
      label: t.fields.informations.fields.floor,
      widget: 'number',
      required: false,
      i18n: 'duplicate'
    },
    {
      name: 'rooms',
      label: t.fields.informations.fields.rooms,
      widget: 'number',
      required: false,
      i18n: 'duplicate',
      min: 0
    },
    {
      name: 'bedrooms',
      label: t.fields.informations.fields.bedrooms,
      widget: 'number',
      required: false,
      i18n: 'duplicate',
      min: 0
    },
    {
      name: 'bathrooms',
      label: t.fields.informations.fields.bathrooms,
      widget: 'number',
      required: false,
      i18n: 'duplicate',
      min: 0
    },
    {
      name: 'showerrooms',
      label: t.fields.informations.fields.showerrooms,
      widget: 'number',
      required: false,
      i18n: 'duplicate',
      min: 0
    }
  ]
};
