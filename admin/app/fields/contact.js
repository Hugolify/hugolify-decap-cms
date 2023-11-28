import { email } from './email.js';
import { phone } from './phone.js';
import { linkedin } from './linkedin.js';
import { twitter } from './twitter.js';
import { t } from '../i18n/translater.js';

export const contact = {
  name: 'contact',
  label: t.fields.contact,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [email, phone, linkedin, twitter]
};
