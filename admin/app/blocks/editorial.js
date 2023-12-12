import { background } from '../fields/background.js';
import { cta } from '../fields/cta.js';
import { direction } from '../fields/direction.js';
import { image } from '../fields/image.js';
import { notes } from '../fields/notes.js';
import { surtitle } from '../fields/surtitle.js';
import { text_markdown } from '../fields/text-markdown.js';
import { title } from '../fields/title.js';
import { t } from '../i18n/translater.js';

export const block_editorial = {
  name: 'editorial',
  label: t.blocks.editorial,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [
    direction,
    surtitle,
    title,
    text_markdown,
    notes,
    cta,
    image,
    background
  ]
};
