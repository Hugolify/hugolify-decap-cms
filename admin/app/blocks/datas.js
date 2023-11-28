import { heading } from '../fields/heading.js';
import { title } from '../fields/title.js';
import { text } from '../fields/text.js';
import { column } from '../fields/column.js';
import { show_gauge } from '../fields/show-gauge.js';
import { show_color } from '../fields/show-color.js';
import { prefix } from '../fields/prefix.js';
import { value_number } from '../fields/value-number.js';
import { suffix } from '../fields/suffix.js';
import { limit } from '../fields/limit.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_datas = {
  name: 'datas',
  label: t.blocks.datas.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    column,
    show_gauge,
    show_color,
    {
      name: 'items',
      label: t.blocks.datas.fields.items,
      widget: 'list',
      required: false,
      i18n: true,
      collapsed: true,
      summary: '{{title}}',
      fields: [prefix, value_number, suffix, limit, title, text]
    },
    background
  ]
};
