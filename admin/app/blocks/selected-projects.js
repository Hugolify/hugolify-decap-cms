import { heading } from '../fields/heading.js';
import { projects } from '../fields/projects.js';
import { show_more } from '../fields/show-more.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_selectedprojects = {
  name: 'selected-projects',
  label: t.blocks.selectedprojects,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    { name: 'section', default: 'projects', widget: 'hidden' },
    projects,
    show_more,
    background
  ]
};
