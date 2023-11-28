import { heading } from '../fields/heading.js';
import { url } from '../fields/url.js';
import { value } from '../fields/value.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_newsletter = {
  name: 'newsletter',
  label: t.blocks.newsletter.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{title}}',
  fields: [
    heading,
    {
      name: 'form',
      label: t.blocks.newsletter.fields.form,
      widget: 'object',
      required: true,
      i18n: true,
      collapsed: false,
      summary: '{{ url }}',
      fields: [
        url,
        {
          name: 'hiddens',
          label: t.blocks.newsletter.fields.hiddens.label,
          widget: 'list',
          i18n: true,
          collapsed: true,
          required: false,
          fields: [
            {
              name: 'name',
              label: t.fields.name,
              widget: 'string',
              required: false,
              i18n: 'duplicate'
            },
            value
          ]
        }
      ]
    },
    background
  ]
};
