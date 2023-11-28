import { mediaLibrary } from '../settings/media-library.js';
import { t } from '../i18n/translater.js';
let maxFileSize = 700000;
if (mediaLibrary) {
  maxFileSize = 5000000;
}

export const logo = {
  name: 'logo',
  label: t.fields.logo.label,
  widget: 'image',
  required: false,
  i18n: 'duplicate',
  choose_url: false,
  media_library: {
    config: {
      max_file_size: maxFileSize
    }
  },
  hint: t.fields.logo.hint,
  media_folder: '/assets/images/uploads',
  public_folder: '/images/uploads'
};
