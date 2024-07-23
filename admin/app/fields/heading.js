import { surtitle } from './surtitle.js';
import { title } from './title.js';
import { text_markdown } from './text-markdown.js';
import { t } from '../i18n/translater.js';

export const heading = {
  name: 'heading',
  label: t.fields.heading,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{title}}',
  fields: [surtitle, title, text_markdown]
};
