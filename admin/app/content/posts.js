import { authors } from '../fields/authors.js';
import { body } from '../fields/body.js';
import { categories } from '../fields/categories.js';
import { date } from '../fields/date.js';
import { draft } from '../fields/draft.js';
import { featured_image } from '../fields/featured-image.js';
import { isNotIndex } from '../fields/is-not-index.js';
import { description } from '../fields/page-description.js';
import { title } from '../fields/page-title.js';
import { tags } from '../fields/tags.js';
import { t } from '../i18n/translater.js';

const posts = {
  name: 'posts',
  folder: 'content/posts',
  label: t.content.posts.label,
  label_singular: t.content.posts.label_singular,
  description: t.content.posts.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  path: '{{year}}/{{month}}/{{slug}}',
  slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
  sortable_fields: ['date', 'title'],
  summary: '{{title}} — {{year}}/{{month}}/{{day}}',

  filter: { field: 'isIndex', value: false },

  fields: [
    isNotIndex,
    draft,
    date,
    title,
    description,
    categories,
    tags,
    authors,
    featured_image,
    body
  ]
};

export default posts;
