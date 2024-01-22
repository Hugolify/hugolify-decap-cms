import { isNotIndex } from '../fields/is-not-index.js';
import { title } from '../fields/title-required.js';
import { t } from '../i18n/translater.js';

const products_tags = {
  name: 'products_tags',
  folder: 'content/products_tags',
  label: t.content.products_tags.label,
  label_singular: t.content.products_tags.label_singular,
  description: t.content.products_tags.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  slug: '{{slug}}',
  path: '{{slug}}/_index',

  nested: { depth: 2 },
  filter: { field: 'isIndex', value: false },

  fields: [isNotIndex, title]
};

export default products_tags;
