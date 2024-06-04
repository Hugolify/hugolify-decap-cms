import { mediaLibrary } from '../settings/media-library.js';
import { t } from '../i18n/translater.js';
let maxFileSize = 5000000;
if (mediaLibrary) {
  maxFileSize = 10000000;
}

export const pdf = {
  name: 'file',
  label: t.fields.pdf.label,
  widget: 'file',
  required: false,
  i18n: 'duplicate',
  choose_url: false,
  media_library: {
    config: {
      max_file_size: maxFileSize
    }
  },
  hint: t.fields.pdf.hint,
  media_folder: 'static/pdf',
  public_folder: '/pdf'
};
