import { map } from './map.js';
import { t } from '../i18n/translater.js';

export const address = {
  name: 'address',
  label: t.fields.address.label,
  widget: 'object',
  required: false,
  // i18n: true,
  collapsed: true,
  fields: [
    {
      name: 'street',
      label: t.fields.address.fields.street,
      widget: 'string',
      required: false
    },
    {
      name: 'zipcode',
      label: t.fields.address.fields.zipcode,
      widget: 'string',
      required: false
    },
    {
      name: 'city',
      label: t.fields.address.fields.city,
      widget: 'string',
      required: false
    },
    {
      name: 'country',
      label: t.fields.address.fields.country,
      widget: 'string',
      required: false
    },
    {
      name: 'coordinates',
      label: t.fields.address.fields.coordinates.label,
      hint: t.fields.address.fields.coordinates.hint,
      widget: 'object',
      required: false,
      collapsed: true,
      fields: [
        {
          name: 'lat',
          label: t.fields.address.fields.lat,
          widget: 'number',
          value_type: 'float',
          required: false
        },
        {
          name: 'lng',
          label: t.fields.address.fields.lng,
          widget: 'number',
          value_type: 'float',
          required: false
        }
      ]
    }
  ]
};
