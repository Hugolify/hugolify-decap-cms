import { isNotIndex } from '../fields/is-not-index.js';
import { draft } from '../fields/draft.js';
import { date } from '../fields/date.js';
import { reference } from '../fields/reference.js';
import { title } from '../fields/title.js';
import { description } from '../fields/description.js';
import { realestates_persons } from '../fields/realestates_persons.js';
import { realestates_categories } from '../fields/realestates_categories.js';
import { offer } from '../fields/offer.js';
import { informations } from '../fields/realestates-informations.js';
import { address } from '../fields/address.js';
import { keyfeatures } from '../fields/keyfeatures.js';
import { diagnostic } from '../fields/diagnostic.js';
import { documents } from '../fields/documents.js';
import { featured_image } from '../fields/featured-image.js';
import { gallery } from '../fields/gallery.js';
import { body } from '../fields/body.js';
import { t } from '../i18n/translater.js';

const realestates = {
  name: 'realestates',
  folder: 'content/realestates',
  label: t.content.realestates.label,
  label_singular: t.content.realestates.label_singular,
  description: t.content.realestates.description,

  create: true,
  editor: { preview: false },
  i18n: true,

  slug: '{{slug}}',
  path: '{{year}}/{{slug}}',
  sortable_fields: ['date', 'title'],
  summary: '{{title}} — {{year}}',

  filter: { field: 'isIndex', value: false },

  fields: [
    isNotIndex,
    draft,
    date,
    title,
    description,
    reference,
    realestates_categories,
    realestates_persons,
    offer,
    informations,
    diagnostic,
    keyfeatures,
    address,
    // documents,
    featured_image,
    gallery,
    body
  ]
};

export default realestates;
