import { mediaLibrary } from '../settings/media-library.js';
import { t } from '../i18n/translater.js';
let maxFileSize = 10000000;
if (mediaLibrary) {
  maxFileSize = 50000000;
}

export const webm = {
  name: 'webm',
  label: t.fields.video.webm.label,
  widget: 'file',
  required: false,
  i18n: 'duplicate',
  choose_url: false,
  media_library: {
    config: {
      max_file_size: maxFileSize
    }
  },
  hint: t.fields.video.webm.hint,
  media_folder: '/static/assets/videos',
  public_folder: '/assets/videos'
};
