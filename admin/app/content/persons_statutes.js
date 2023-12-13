import { isNotIndex } from '../fields/is-not-index.js';
import { title } from '../fields/title-required.js';
import { weight } from '../fields/weight.js';
import { t } from '../i18n/translater.js';

const persons_statutes = {
  name: 'persons_statutes',
  folder: 'content/persons_statutes',
  label: t.content.persons_statutes.label,
  label_singular: t.content.persons_statutes.label_singular,
  description: t.content.persons_statutes.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  slug: '{{slug}}',
  path: '{{slug}}/_index',

  nested: { depth: 2 },
  filter: { field: 'isIndex', value: false },

  fields: [isNotIndex, title, weight]
};

export default persons_statutes;
