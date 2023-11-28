import { t } from '../i18n/translater.js';

export const breakpoints = {
  name: 'breakpoints',
  label: t.fields.carousel.fields.breakpoints.label,
  widget: 'select',
  options: [
    { label: t.fields.carousel.fields.breakpoints.options.mobile, value: 640 },
    { label: t.fields.carousel.fields.breakpoints.options.tablet, value: 768 },
    {
      label: t.fields.carousel.fields.breakpoints.options.wide_tablet,
      value: 1024
    },
    { label: t.fields.carousel.fields.breakpoints.options.laptop, value: 1280 },
    { label: t.fields.carousel.fields.breakpoints.options.desktop, value: 1440 }
  ],
  default: 640,
  required: false,
  i18n: 'duplicate'
};
