import { isNotIndex } from '../fields/is-not-index.js';
import { draft } from '../fields/draft.js';
import { title } from '../fields/title-required.js';
import { description } from '../fields/description.js';
import { date } from '../fields/date.js';
import { projects_types } from '../fields/projects_types.js';
import { projects_tags } from '../fields/projects_tags.js';
import { featured_image } from '../fields/featured-image.js';
import { datas } from '../fields/datas.js';
import { body } from '../fields/body.js';
import { images } from '../fields/images.js';
import { t } from '../i18n/translater.js';

const projects = {
  name: 'projects',
  folder: 'content/projects',
  label: t.content.projects.label,
  label_singular: t.content.projects.label_singular,
  description: t.content.projects.description,

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
    projects_types,
    projects_tags,
    featured_image,
    datas,
    images,
    body
  ]
};

export default projects;
