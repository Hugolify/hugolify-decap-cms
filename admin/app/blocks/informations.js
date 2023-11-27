import { heading } from '../fields/heading.js';
import { icon } from '../fields/icon.js';
import { image_src } from '../fields/image-src.js';
import { image_alt } from '../fields/image-alt.js';
import { title } from '../fields/title.js';
import { text } from '../fields/text.js';
import { cta } from '../fields/cta.js';
import { column } from '../fields/column.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_informations = {
  name: 'informations',
  label: t.blocks.informations.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    column,
    {
      name: 'items',
      label: t.blocks.informations.fields.items.label,
      label_singular: t.blocks.informations.fields.items.label_singular,
      widget: 'list',
      required: false,
      i18n: true,
      collapsed: true,
      summary: '{{title}}',
      fields: [
        icon,
        {
          name: 'image',
          label: t.blocks.informations.fields.items.fields.image.label,
          widget: 'object',
          required: false,
          i18n: true,
          collapsed: true,
          fields: [
            image_src,
            image_alt,
            {
              name: 'isLogo',
              label:
                t.blocks.informations.fields.items.fields.image.fields.isLogo
                  .label,
              widget: 'boolean',
              required: false,
              hint: t.blocks.informations.fields.items.fields.image.fields
                .isLogo.hint,
              i18n: 'duplicate'
            }
          ]
        },
        title,
        text,
        cta
      ]
    },
    background
  ]
};
