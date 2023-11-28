/* global CMS */
import { credit } from '../../fields/credit.js';
import { image_alt } from '../../fields/image-alt.js';
import { image_src } from '../../fields/image-src.js';
import { legend } from '../../fields/legend.js';
import { t } from '../../i18n/translater.js';

CMS.registerEditorComponent({
  id: 'figure',
  label: t.shortcodes.figure,
  fields: [image_src, image_alt, legend, credit],
  pattern:
    /{{< figure src="(.*?)" alt="(.*?)" legend="(.*?)" credit="(.*?)" >}}/,
  fromBlock: function (match) {
    return {
      src: match[1] ?? '',
      alt: match[2] ?? '',
      legend: match[3] ?? '',
      credit: match[4] ?? ''
    };
  },
  toBlock: function (obj) {
    return `{{< figure src="${obj.src ?? ''}" alt="${obj.alt ?? ''}" legend="${
      obj.legend ?? ''
    }" credit="${obj.credit ?? ''}" >}}`;
  },
  toPreview: function (obj) {
    return `{{< figure src="${obj.src ?? ''}" alt="${obj.alt ?? ''}" legend="${
      obj.legend ?? ''
    }" credit="${obj.credit ?? ''}" >}}`;
  }
});
