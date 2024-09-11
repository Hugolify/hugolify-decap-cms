import { heading } from '../fields/heading.js';
import { offer_arguments } from '../fields/offer-arguments.js';
import { offer } from '../fields/offer.js';
import { title } from '../fields/title.js';
import { text } from '../fields/text.js';
import { badge } from '../fields/badge.js';
import { cta } from '../fields/cta.js';
import { is_highlighted } from '../fields/is-highlighted.js';
import { column } from '../fields/column.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_comparison = {
  name: 'comparison',
  label: t.blocks.comparison.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    column,
    {
      name: 'items',
      label: t.blocks.comparison.fields.items.label,
      label_singular: t.blocks.comparison.fields.items.label_singular,
      widget: 'list',
      required: false,
      i18n: true,
      collapsed: true,
      summary: '{{title}}',
      fields: [title, text, badge, offer, offer_arguments, is_highlighted, cta]
    },
    background
  ]
};
