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
  fields: [
    {
      label: t.fields.notes.fields.id.label,
      hint: t.fields.notes.fields.id.hint,
      name: 'id',
      widget: 'number'
    },
    { label: t.fields.notes.fields.text.label, name: 'text', widget: 'text' }
  ]
};
