import backend from './config/backend.js';
import display_url from './config/display_url.js';
import i18n from './config/i18n.js';
import load_config_file from './config/load_config_file.js';
import local_backend from './config/local_backend.js';
import locale from './config/locale.js';
import logo_url from './config/logo_url.js';
import media_folder from './config/media_folder.js';
import media_library from './config/media_library.js';
import public_folder from './config/public_folder.js';
import publish_mode from './config/publish_mode.js';
import slug from './config/slug.js';

import { availableLanguages } from './settings/available-languages.js';
import { mediaLibrary } from './settings/media-library.js';

export let config = {
  publish_mode,
  backend,
  load_config_file,
  local_backend,
  display_url,
  logo_url,
  locale,

  // files
  media_folder,
  public_folder,

  // content
  slug
};

// i18n support
if (availableLanguages.length > 1) {
  config.i18n = i18n;
}

// If media library
if (mediaLibrary) {
  config.media_library = media_library;
}

export default config;
