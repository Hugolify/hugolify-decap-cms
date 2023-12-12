import { t } from '../i18n/translater.js';

export const notes = {
  name: 'notes',
  label: t.fields.notes.label,
  label_singular: t.fields.notes.label_singular,
  hint: t.fields.notes.hint,
  widget: 'list',
  collapsed: true,
  minimize_collapsed: true,
  required: false,
  i18n: true,
  summary: "{{text | truncate(50, '…')}}",
  fields: [
    {
      label: t.fields.notes.field.label,
      name: 'text',
      widget: 'text'
    }
  ]
};
