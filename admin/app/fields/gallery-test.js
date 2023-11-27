import { uploadcarePublicKey } from '../settings/uploadcare-public-key.js';
import { image_src } from './image-src.js';
import { image_alt } from './image-alt.js';
import { credit } from './credit.js';
import { legend } from './legend.js';
import { t } from '../i18n/translater.js';

let gallery = {};

// If uploadcare is available
if (uploadcarePublicKey !== '') {
  gallery = {
    name: 'gallery',
    label: t.fields.gallery,
    allow_multiple: true,
    widget: 'image',
    i18n: true,
    media_library: {
      config: {
        multiple: true
      }
    }
  };
} else {
  gallery = {
    name: 'gallery',
    label: t.fields.gallery,
    widget: 'list',
    i18n: true,
    fields: [image_src, image_alt, credit, legend]
  };
}

export default gallery;
