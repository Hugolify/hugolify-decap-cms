import { heading } from '../fields/heading.js';
import { products } from '../fields/products.js';
import { show_more } from '../fields/show-more.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_selectedproducts = {
  name: 'selected-products',
  label: t.blocks.selectedproducts,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    { name: 'section', default: 'products', widget: 'hidden' },
    products,
    show_more,
    background
  ]
};
