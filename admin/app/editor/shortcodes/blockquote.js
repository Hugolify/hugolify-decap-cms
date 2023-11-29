/* global CMS */
import { quote } from '../../fields/quote.js'
import { title } from '../../fields/title.js'
import { text } from '../../fields/text.js'
import { image_src } from '../../fields/image-src.js'
import { t } from "../../i18n/translater.js";

CMS.registerEditorComponent({
  id: 'blockquote',
  label: t.shortcodes.blockquote,
  fields: [
    quote,
    title,
    text,
    image_src
  ],
  pattern: /{{< blockquote quote="(.*?)" title="(.*?)" text="(.*?)" image="(.*?)" >}}/,
  fromBlock: function (match) {
    return {
      quote: match[1] ?? '',
      title: match[2] ?? '',
      text: match[3] ?? '',
      image: match[4] ?? ''
    };
  },
  toBlock: function (obj) {
    return `{{< blockquote quote="${obj.quote ?? ''}" title="${obj.title ?? ''}" text="${obj.text ?? ''}" image="${obj.image ?? ''}" >}}`;
  },
  toPreview: function (obj) {
    return `
      <figure class="quote">
        <blockquote>
          <p>${obj.quote ?? ''}</p>
        </blockquote>
        <figcaption>
          <picture>
            ${obj.image ?? ''}
          </picture>
          <div>
            <cite>${obj.title ?? ''}</cite><br>
            ${obj.text ?? ''}
          </div>
        </figcaption>
      </figure>
    `;
  }
});
