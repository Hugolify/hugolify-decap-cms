import { heading } from '../fields/heading.js';
import { count } from '../fields/count.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_instagram = {
  name: 'instagram',
  label: t.blocks.instagram.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    count,
    {
      name: 'token',
      label: t.blocks.instagram.fields.token,
      widget: 'string',
      required: true,
      i18n: 'duplicate'
    },
    background
  ]
};
