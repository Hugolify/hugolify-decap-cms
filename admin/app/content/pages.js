import { blocks } from '../blocks/blocks.js';
import { body } from '../fields/body.js';
import { draft } from '../fields/draft.js';
import { featured_image } from '../fields/featured-image.js';
import { hero } from '../fields/hero.js';
import { isPage } from '../fields/is-page.js';
import { description } from '../fields/page-description.js';
import { title } from '../fields/page-title.js';
import { t } from '../i18n/translater.js';

const pages = {
  name: 'pages',
  folder: 'content',
  label: t.content.pages.label,
  label_singular: t.content.pages.label_singular,
  description: t.content.pages.description,

  create: true,
  editor: { preview: false },
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
    body,
    blocks
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
