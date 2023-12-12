import { align } from '../fields/align.js';
import { background } from '../fields/background.js';
import { cta } from '../fields/cta.js';
import { grid } from '../fields/grid.js';
import { notes } from '../fields/notes.js';
import { offset } from '../fields/offset.js';
import { surtitle } from '../fields/surtitle.js';
import { text_markdown } from '../fields/text-markdown.js';
import { title } from '../fields/title.js';
import { t } from '../i18n/translater.js';

export const block_paragraph = {
  name: 'paragraph',
  label: t.blocks.paragraph,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [
    surtitle,
    title,
    text_markdown,
    notes,
    grid,
    offset,
    align,
    cta,
    background
  ]
};
