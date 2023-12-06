import { t } from '../i18n/translater.js';

export const weight = {
  name: 'weight',
  label: t.fields.weight,
  widget: 'select',
  options: [
    { label: '1- Le plus important', value: 10 },
    { label: '2- Très important', value: 20 },
    { label: '3- Important', value: 30 },
    { label: '4- …', value: 40 },
    { label: '5- …', value: 50 },
    { label: '6- …', value: 60 },
    { label: '7- …', value: 70 },
    { label: '8- Peu important', value: 80 },
    { label: '9- Pas important', value: 90 },
    { label: '10- Le moins important', value: 100 }
  ],
  required: true,
  i18n: 'duplicate'
};
