import { isPage } from '../fields/is-page.js';
import { draft } from '../fields/draft.js';
import { title } from '../fields/title.js';
import { hero } from '../fields/hero.js';
import { featured_image } from '../fields/featured-image.js';
import { description } from '../fields/description.js';
import { body } from '../fields/body.js';
import { blocks } from '../blocks/blocks.js';
import { t } from '../i18n/translater.js';

const pages = {
  name: 'pages',
  folder: 'content',
  label: t.content.pages.label,
  label_singular: t.content.pages.label_singular,
  description: t.content.pages.description,

  create: true,
  editor: { preview: true },
  i18n: true,

  slug: '{{slug}}',
  path: '{{slug}}/_index',

  nested: { depth: 5 },
  filter: { field: 'isPage', value: true },
  summary: '{{title}}',

  fields: [
    isPage,
    draft,
    title,
    description,
    featured_image,
    hero,
    blocks,
    body
  ],
  meta: {
    path: {
      label: t.content.pages.meta.parent,
      widget: 'parent',
      index_file: '_index'
    }
  }
};

export default pages;
