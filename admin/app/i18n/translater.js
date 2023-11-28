import config from '../config.js';
import * as fr from './fr/index.js';
import * as en from './en/index.js';

const translations = {
  en,
  fr
};

export const t = translations[config.locale];
