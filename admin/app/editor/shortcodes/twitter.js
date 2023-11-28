/* global CMS */
import { t } from '../../i18n/translater.js';

CMS.registerEditorComponent({
  id: 'twitter',
  label: t.shortcodes.twitter.label,
  fields: [
    {
      name: 'user',
      label: t.shortcodes.twitter.fields.user,
      widget: 'string'
    },
    {
      name: 'id',
      label: t.shortcodes.twitter.fields.id,
      widget: 'string'
    }
  ],
  pattern: /{{< tweet (.*?) >}}/,
  fromBlock: function (match) {
    return {
      user: match[1],
      id: match[2]
    };
  },
  toBlock: function (obj) {
    return `{{< tweet user="${obj.user}" id="${obj.id}" >}}`;
  },
  toPreview: function (obj) {
    return `{{< tweet user="${obj.user}" id="${obj.id}" >}}`;
  }
});
