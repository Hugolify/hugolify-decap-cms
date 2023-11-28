/* global CMS */
import { text } from '../../fields/text.js';
import { url } from '../../fields/url.js';
import { blank } from '../../fields/blank.js';
import { t } from '../../i18n/translater.js';

CMS.registerEditorComponent({
  id: 'button',
  label: t.shortcodes.button,
  fields: [text, url, blank],
  pattern: /{{< button text="(.*)" url="(.*)" blank="(true|false)" >}}/,
  fromBlock: function (match) {
    return {
      text: match[1],
      url: match[2],
      blank: match[3] === 'true'
    };
  },
  toBlock: function (obj) {
    return `{{< button text="${obj.text}" url="${obj.url}" blank="${obj.blank}" >}}`;
  },
  toPreview: function (obj) {
    return `<a class="btn" href="${obj.url}">${obj.text}</a>`;
  }
});
