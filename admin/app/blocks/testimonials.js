import { heading } from '../fields/heading.js';
import { quote } from '../fields/quote.js';
import { author } from '../fields/author.js';
import { layout } from '../fields/layout.js';
import { carousel } from '../fields/carousel.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_testimonials = {
  name: 'testimonials',
  label: t.blocks.testimonials.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    {
      name: 'items',
      label: t.blocks.testimonials.fields.items.label,
      label_singular: t.blocks.testimonials.fields.items.label_singular,
      widget: 'list',
      required: false,
      i18n: true,
      collapsed: true,
      summary: '{{fields.quote | truncate(30, "…")}}',
      fields: [quote, author]
    },
    layout,
    carousel,
    background
  ]
};
