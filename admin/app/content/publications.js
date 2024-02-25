import { body } from '../fields/body.js';
import { date } from '../fields/date.js';
import { draft } from '../fields/draft.js';
import { featured_image } from '../fields/featured-image.js';
import { images } from '../fields/images.js';
import { isNotIndex } from '../fields/is-not-index.js';
import { description } from '../fields/page-description.js';
import { title } from '../fields/page-title.js';
import { press } from '../fields/press.js';
import { publications_persons } from '../fields/publications_persons.js';
import { t } from '../i18n/translater.js';

const publications = {
  name: 'publications',
  folder: 'content/publications',
  label: t.content.publications.label,
  label_singular: t.content.publications.label_singular,
  description: t.content.publications.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  path: '{{year}}/{{month}}/{{slug}}',
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  sortable_fields: ['date', 'title'],
  summary: '{{title}} — {{year}}',

  filter: { field: 'isIndex', value: false },

  fields: [
    isNotIndex,
    draft,
    date,
    publications_persons,
    title,
    description,
    press,
    featured_image,
    images,
    body
  ]
};

export default publications;
