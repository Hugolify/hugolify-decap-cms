import { isNotIndex } from '../fields/is-not-index.js';
import { title } from '../fields/title-required.js';
import { t } from '../i18n/translater.js';

const realestates_sellers = {
  name: 'realestates_sellers',
  folder: 'content/realestates_sellers',
  label: t.content.realestates_sellers.label,
  label_singular: t.content.realestates_sellers.label_singular,
  description: t.content.realestates_sellers.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  slug: '{{slug}}',
  path: '{{slug}}/_index',

  nested: { depth: 2 },
  filter: { field: 'isIndex', value: false },

  fields: [isNotIndex, title]
};

export default realestates_sellers;
