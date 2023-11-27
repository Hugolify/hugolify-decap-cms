import { title } from './title.js';
import { pdf } from './pdf.js';
import { t } from '../i18n/translater.js';

export const documents = {
  name: 'documents',
  label: t.fields.documents,
  widget: 'list',
  i18n: true,
  fields: [title, pdf]
};
