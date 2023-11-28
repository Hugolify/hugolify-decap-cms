import { surtitle } from '../fields/surtitle.js';
import { title } from '../fields/title.js';
import { text_markdown } from '../fields/text-markdown.js';
import { grid } from '../fields/grid.js';
import { offset } from '../fields/offset.js';
import { align } from '../fields/align.js';
import { cta } from '../fields/cta.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_paragraph = {
  name: 'paragraph',
  label: t.blocks.paragraph,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [surtitle, title, text_markdown, grid, offset, align, cta, background]
};
