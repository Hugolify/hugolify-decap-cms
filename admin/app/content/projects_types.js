import { isNotIndex } from '../fields/is-not-index.js';
import { title } from '../fields/title-required.js';
import { t } from '../i18n/translater.js';

const projects_types = {
  name: 'projects_types',
  folder: 'content/projects_types',
  label: t.content.projects_types.label,
  label_singular: t.content.projects_types.label_singular,
  description: t.content.projects_types.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  slug: '{{slug}}',
  path: '{{slug}}/_index',

  nested: { depth: 2 },
  filter: { field: 'isIndex', value: false },

  fields: [isNotIndex, title]
};

export default projects_types;
