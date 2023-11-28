import { heading } from '../fields/heading.js';
import { title } from '../fields/title.js';
import { text_markdown } from '../fields/text-markdown.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_faq = {
  name: 'faq',
  label: t.blocks.faq.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    {
      name: 'items',
      label: t.blocks.faq.fields.items,
      widget: 'list',
      required: false,
      i18n: true,
      collapsed: true,
      summary: '{{title}}',
      fields: [title, text_markdown]
    },
    background
  ]
};
