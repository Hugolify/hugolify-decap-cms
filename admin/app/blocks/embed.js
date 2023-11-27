import { heading } from '../fields/heading.js';
import { embed } from '../fields/embed.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_embed = {
  name: 'embed',
  label: t.blocks.embed,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [heading, embed, background]
};
