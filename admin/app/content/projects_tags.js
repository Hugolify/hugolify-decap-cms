import { isNotIndex } from '../fields/is-not-index.js';
import { title } from '../fields/title-required.js';
import { t } from '../i18n/translater.js';

const projects_tags = {
  name: 'projects_tags',
  folder: 'content/projects_tags',
  label: t.content.projects_tags.label,
  label_singular: t.content.projects_tags.label_singular,
  description: t.content.projects_tags.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  slug: '{{slug}}',
  path: '{{slug}}/_index',

  nested: { depth: 2 },
  filter: { field: 'isIndex', value: false },

  fields: [isNotIndex, title]
};

export default projects_tags;
