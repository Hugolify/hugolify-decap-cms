import { isNotIndex } from '../fields/is-not-index.js';
import { title } from '../fields/title-required.js';
import { t } from '../i18n/translater.js';

const tags = {
  name: 'tags',
  folder: 'content/tags',
  label: t.content.tags.label,
  label_singular: t.content.tags.label_singular,
  description: t.content.tags.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  slug: '{{slug}}',
  path: '{{slug}}/_index',

  nested: { depth: 2 },
  filter: { field: 'isIndex', value: false },

  fields: [isNotIndex, title]
};

export default tags;
