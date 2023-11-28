/* global CMS */
import { t } from '../../i18n/translater.js';

CMS.registerEditorComponent({
  id: 'youtube',
  label: t.shortcodes.youtube.label,
  fields: [
    {
      name: 'id',
      label: t.shortcodes.youtube.fields.id,
      widget: 'string'
    },
    {
      name: 'title',
      label: t.shortcodes.youtube.fields.title,
      widget: 'string'
    }
  ],
  pattern: /{{< youtube id="(.*)" title="(.*)" class="youtube" >}}/,
  fromBlock: function (match) {
    return {
      id: match[1],
      title: match[2]
    };
  },
  toBlock: function (obj) {
    return `{{< youtube id="${obj.id}" title="${obj.title}" class="youtube" >}}`;
  },
  toPreview: function (obj) {
    return `<img src="https://i3.ytimg.com/vi/${obj.id}/hqdefault.jpg" alt="" />`;
  }
});
