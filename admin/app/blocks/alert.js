import { text_markdown } from '../fields/text-markdown.js';
import { state } from '../fields/state.js';
import { background } from '../fields/background.js';
import { t } from '../i18n/translater.js';

export const block_alert = {
  name: 'alert',
  label: t.blocks.alert,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{text_markdown}}',
  fields: [text_markdown, state, background]
};
