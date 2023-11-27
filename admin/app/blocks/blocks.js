import * as availableBlocks from '../settings/available-blocks.js';
import { t } from '../i18n/translater.js';
export const blocks = {
  name: 'blocks',
  label: t.blocks.blocks.label,
  label_singular: t.blocks.blocks.label_singular,
  widget: 'list',
  collapsed: false,
  types: Object.values(availableBlocks),
  i18n: true
};
