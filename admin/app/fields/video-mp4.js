import { mediaLibrary } from '../settings/media-library.js';
import { t } from '../i18n/translater.js';
let maxFileSize = 10000000;
if (mediaLibrary) {
  maxFileSize = 50000000;
}

export const mp4 = {
  name: 'mp4',
  label: t.fields.video.mp4.label,
  widget: 'file',
  required: false,
  i18n: 'duplicate',
  choose_url: false,
  media_library: {
    config: {
      max_file_size: maxFileSize
    }
  },
  hint: t.fields.video.mp4.hint,
  media_folder: '/static/assets/videos',
  public_folder: '/assets/videos'
};
