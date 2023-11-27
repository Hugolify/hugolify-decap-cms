import { title } from './title.js';
import { text } from './text.js';
import { t } from '../i18n/translater.js';

export const datas = {
  name: 'datas',
  label: t.fields.datas,
  widget: 'list',
  i18n: true,
  required: false,
  fields: [title, text]
};
