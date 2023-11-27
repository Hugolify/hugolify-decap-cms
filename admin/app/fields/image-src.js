import { mediaLibrary } from '../settings/media-library.js';
import { t } from '../i18n/translater.js';
let maxFileSize = 700000;
if (mediaLibrary) {
  maxFileSize = 5000000;
}

export const image_src = {
  name: 'src',
  label: t.fields.image_src.label,
  widget: 'image',
  required: false,
  i18n: 'duplicate',
  choose_url: false,
  media_library: {
    config: {
      max_file_size: maxFileSize
    }
  },
  hint: t.fields.image_src.hint,
  media_folder: '/assets/images/uploads',
  public_folder: '/images/uploads'
};
