import { heading } from '../fields/heading.js';
import { title } from '../fields/title.js';
import { value } from '../fields/value.js';
import { grid } from '../fields/grid.js';
import { offset } from '../fields/offset.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_form = {
  name: 'form',
  label: t.blocks.form.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    grid,
    offset,
    {
      name: 'name',
      label: t.blocks.form.fields.name,
      widget: 'string',
      i18n: 'duplicate'
    },
    {
      name: 'submit',
      label: t.blocks.form.fields.submit,
      widget: 'string',
      i18n: true
    },
    {
      name: 'items',
      label: t.blocks.form.fields.items.label,
      label_singular: t.blocks.form.fields.items.label_singular,
      widget: 'list',
      required: false,
      i18n: true,
      collapsed: true,
      summary: '{{label}}',
      fields: [
        {
          name: 'label',
          label: t.blocks.form.fields.items.fields.label,
          widget: 'string',
          i18n: true
        },
        {
          name: 'type',
          label: t.blocks.form.fields.items.fields.type.label,
          widget: 'select',
          i18n: 'duplicate',
          options: [
            {
              label: t.blocks.form.fields.items.fields.type.options.email,
              value: 'email'
            },
            {
              label: t.blocks.form.fields.items.fields.type.options.select,
              value: 'select'
            },
            {
              label: t.blocks.form.fields.items.fields.type.options.tel,
              value: 'tel'
            },
            {
              label: t.blocks.form.fields.items.fields.type.options.text,
              value: 'text'
            },
            {
              label: t.blocks.form.fields.items.fields.type.options.textarea,
              value: 'textarea'
            }
          ],
          default: 'text'
        },
        {
          name: 'options',
          label: t.blocks.form.fields.items.fields.options.label,
          label_singular: 'option',
          hint: t.blocks.form.fields.items.fields.options.hint,
          widget: 'list',
          required: false,
          i18n: true,
          fields: [title, value]
        },
        {
          name: 'required',
          label: t.blocks.form.fields.items.fields.required,
          widget: 'boolean',
          default: false,
          i18n: 'duplicate',
          required: false
        },
        {
          name: 'full',
          label: t.blocks.form.fields.items.fields.full,
          widget: 'boolean',
          default: false,
          i18n: 'duplicate',
          required: false
        },
        {
          name: 'placeholder',
          label: t.blocks.form.fields.items.fields.placeholder,
          widget: 'string',
          i18n: true,
          required: false
        },
        {
          name: 'autocomplete',
          label: t.blocks.form.fields.items.fields.autocomplete.label,
          widget: 'select',
          i18n: 'duplicate',
          required: false,
          options: [
            {
              label:
                t.blocks.form.fields.items.fields.autocomplete.options
                  .postal_code,
              value: 'postal-code'
            },
            {
              label:
                t.blocks.form.fields.items.fields.autocomplete.options.email,
              value: 'email'
            },
            {
              label:
                t.blocks.form.fields.items.fields.autocomplete.options.name,
              value: 'name'
            },
            {
              label:
                t.blocks.form.fields.items.fields.autocomplete.options
                  .family_name,
              value: 'family-name'
            },
            {
              label:
                t.blocks.form.fields.items.fields.autocomplete.options
                  .street_address,
              value: 'street-address'
            },
            {
              label:
                t.blocks.form.fields.items.fields.autocomplete.options
                  .country_name,
              value: 'country-name'
            },
            {
              label:
                t.blocks.form.fields.items.fields.autocomplete.options
                  .given_name,
              value: 'given-name'
            },
            {
              label:
                t.blocks.form.fields.items.fields.autocomplete.options
                  .organization,
              value: 'organization'
            },
            {
              label: t.blocks.form.fields.items.fields.autocomplete.options.tel,
              value: 'tel'
            },
            {
              label:
                t.blocks.form.fields.items.fields.autocomplete.options.textarea,
              value: 'textarea'
            }
          ],
          hint: t.blocks.form.fields.items.fields.autocomplete.hint
        }
      ]
    },
    background
  ]
};
