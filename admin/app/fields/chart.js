import { title } from '../fields/title.js';
import { t } from '../i18n/translater.js';

export const chart = {
  name: 'chart',
  label: t.fields.chart.label,
  widget: 'object',
  fields: [
    title,
    {
      name: 'type',
      label: t.fields.chart.fields.type.label,
      widget: 'select',
      multiple: false,
      options: [
        { label: t.fields.chart.fields.type.options.bar, value: 'bar' },
        { label: t.fields.chart.fields.type.options.pie, value: 'pie' },
        { label: t.fields.chart.fields.type.options.line, value: 'line' },
        {
          label: t.fields.chart.fields.type.options.polarArea,
          value: 'polarArea'
        },
        { label: t.fields.chart.fields.type.options.radar, value: 'radar' }
      ],
      default: ['bar']
    },
    {
      name: 'items',
      label: t.fields.chart.fields.items.label,
      widget: 'list',
      i18n: true,
      fields: [
        {
          name: 'label',
          label: t.fields.chart.fields.items.label,
          widget: 'string',
          i18n: true
        },
        {
          name: 'value',
          label: t.fields.chart.fields.items.value,
          widget: 'number',
          i18n: 'duplicate'
        },
        {
          name: 'color',
          label: t.fields.chart.fields.items.color,
          widget: 'color',
          allowInput: true,
          enableAlpha: true,
          required: false,
          i18n: 'duplicate'
        }
      ]
    },
    {
      name: 'data',
      label: t.fields.chart.fields.data,
      widget: 'code',
      required: false,
      i18n: 'duplicate',
      hint: 'Documentation: https://www.chartjs.org/docs/',
      default_language: 'JSON'
    }
  ]
};
