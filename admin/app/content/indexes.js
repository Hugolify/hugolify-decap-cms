import { isIndex } from '../fields/is-index.js';
import { title } from '../fields/title.js';
import { description } from '../fields/description.js';
import { hero } from '../fields/hero.js';
import { blocks } from '../blocks/blocks.js';
import { t } from '../i18n/translater.js';

const indexes = {
  name: 'indexes',
  folder: 'content',
  label: t.content.indexes.label,
  label_singular: t.content.indexes.label_singular,
  description: t.content.indexes.description,

  create: false,
  editor: { preview: false },
  i18n: true,

  nested: { depth: 3 },
  filter: { field: 'isIndex', value: true },
  summary: '{{title}}',

  fields: [isIndex, title, description, hero, blocks]
};

export default indexes;
