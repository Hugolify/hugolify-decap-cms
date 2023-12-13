import { isNotIndex } from '../fields/is-not-index.js';
import { draft } from '../fields/draft.js';
import { title } from '../fields/title-required.js';
import { description } from '../fields/description.js';
import { body } from '../fields/body.js';
import { featured_image } from '../fields/featured-image.js';
import { t } from '../i18n/translater.js';

const expertises = {
  name: 'expertises',
  folder: 'content/expertises',
  label: t.content.expertises.label,
  label_singular: t.content.expertises.label_singular,
  description: t.content.expertises.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  nested: { depth: 2 },
  filter: { field: 'isIndex', value: false },

  slug: '{{slug}}',
  sortable_fields: ['title'],
  summary: '{{title}}',

  fields: [isNotIndex, draft, title, description, featured_image, body]
};

export default expertises;
