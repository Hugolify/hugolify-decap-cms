import { isNotIndex } from '../fields/is-not-index.js';
import { title } from '../fields/title-required.js';
import { t } from '../i18n/translater.js';

const products_categories = {
  name: 'products_categories',
  folder: 'content/products_categories',
  label: t.content.products_categories.label,
  label_singular: t.content.products_categories.label_singular,
  description: t.content.products_categories.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  slug: '{{slug}}',
  path: '{{slug}}/_index',

  nested: { depth: 2 },
  filter: { field: 'isIndex', value: false },

  fields: [isNotIndex, title]
};

export default products_categories;
