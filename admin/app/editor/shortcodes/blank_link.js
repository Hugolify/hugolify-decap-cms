/* global CMS */
import { text } from '../../fields/text.js';
import { url } from '../../fields/url.js';
import { t } from '../../i18n/translater.js';

CMS.registerEditorComponent({
  id: 'blank_link',
  label: t.shortcodes.blank_link,
  fields: [text, url],
  pattern: /{{< blank_link text="(.*)" link="(.*)" >}}/,
  fromBlock: function (match) {
    return {
      text: match[1],
      link: match[2]
    };
  },
  toBlock: function (obj) {
    return `{{< blank_link text="${obj.text}" link="${obj.url}" >}}`;
  },
  toPreview: function (obj) {
    return `<a href="${obj.url}" target="_blank">${obj.text}</a>`;
  }
});
