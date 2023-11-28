import { quote } from '../fields/quote.js';
import { author } from '../fields/author.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_quote = {
  name: 'quote',
  label: t.blocks.quote,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{quote}}',
  fields: [quote, author, background]
};
