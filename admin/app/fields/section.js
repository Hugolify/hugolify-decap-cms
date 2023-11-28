import { availableSections } from '../settings/available-sections.js';
import { t } from '../i18n/translater.js';

const selectedSections = availableSections.map((sectionName) => ({
  label: t.content[sectionName]?.label ?? sectionName,
  value: sectionName
}));

export const section = {
  name: 'section',
  label: t.fields.section,
  widget: 'select',
  options: selectedSections,
  required: true,
  i18n: 'duplicate'
};
