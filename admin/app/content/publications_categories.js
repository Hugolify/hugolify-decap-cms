import { isNotIndex } from '../fields/is-not-index.js';
import { title } from '../fields/title-required.js';
import { t } from '../i18n/translater.js';

const publications_categories = {
  name: 'publications_categories',
  folder: 'content/publications_categories',
  label: t.content.categories.label,
  label_singular: t.content.publications_categories.label_singular,
  description: t.content.publications_categories.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  slug: '{{slug}}',
  path: '{{slug}}/_index',

  nested: { depth: 2 },
  filter: { field: 'isIndex', value: false },

  fields: [isNotIndex, title]
};

export default publications_categories;
