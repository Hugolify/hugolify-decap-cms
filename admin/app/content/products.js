import { body } from '../fields/body.js';
import { date } from '../fields/date.js';
import { draft } from '../fields/draft.js';
import { featured_image } from '../fields/featured-image.js';
import { images } from '../fields/images.js';
import { isNotIndex } from '../fields/is-not-index.js';
import { offer } from '../fields/offer.js';
import { description } from '../fields/page-description.js';
import { title } from '../fields/page-title.js';
import { products_categories } from '../fields/products_categories.js';
import { products_tags } from '../fields/products_tags.js';
import { t } from '../i18n/translater.js';

const products = {
  name: 'products',
  folder: 'content/products',
  label: t.content.products.label,
  label_singular: t.content.products.label_singular,
  description: t.content.products.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  slug: '{{slug}}',
  path: '{{year}}/{{slug}}',

  filter: { field: 'isIndex', value: false },

  fields: [
    isNotIndex,
    draft,
    date,
    title,
    description,
    offer,
    products_categories,
    products_tags,
    featured_image,
    images,
    body
  ]
};

export default products;
