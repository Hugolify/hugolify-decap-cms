// https://www.netlifycms.org/docs/beta-features/#i18n-support
import { locale } from './locale.js';
import { availableLanguages } from '../settings/available-languages.js';

export const i18n = {
  // Required and can be one of multiple_folders, multiple_files or single_file
  // multiple_folders - persists files in `<folder>/<locale>/<slug>.<extension>`
  // multiple_files - persists files in `<folder>/<slug>.<locale>.<extension>`
  // single_file - persists a single file in `<folder>/<slug>.<extension>`
  structure: 'multiple_files',
  // Required - a list of locales to show in the editor UI
  locales: availableLanguages,
  // Optional, defaults to the first item in locales.
  // The locale to be used for fields validation and as a baseline for the entry.
  default_locale: locale
};
export default i18n;
