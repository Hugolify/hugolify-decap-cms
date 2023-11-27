import { t } from '../i18n/translater.js';

export const carousel_params = {
  name: 'params',
  label: t.fields.carousel.fields.params,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  fields: [
    {
      name: 'focus',
      label: t.fields.carousel.fields.focus.label,
      hint: t.fields.carousel.fields.focus.hint,
      widget: 'boolean',
      options: ['slide', 'loop', 'fade'],
      required: false,
      i18n: 'duplicate'
    },
    {
      name: 'autoplay',
      label: t.fields.carousel.fields.autoplay,
      widget: 'boolean',
      required: false,
      i18n: 'duplicate'
    },
    {
      name: 'arrows',
      label: t.fields.carousel.fields.arrows,
      widget: 'boolean',
      required: false,
      i18n: 'duplicate'
    },
    {
      name: 'pagination',
      label: t.fields.carousel.fields.pagination,
      widget: 'boolean',
      default: true,
      required: false,
      i18n: 'duplicate'
    },
    {
      name: 'type',
      label: t.fields.carousel.fields.type,
      widget: 'select',
      options: ['slide', 'loop', 'fade'],
      required: false,
      i18n: 'duplicate'
    },
    {
      name: 'perPage',
      label: t.fields.carousel.fields.perPage.label,
      hint: t.fields.carousel.fields.perPage.hint,
      widget: 'number',
      min: 1,
      required: false,
      i18n: 'duplicate'
    },
    {
      name: 'padding',
      label: t.fields.carousel.fields.padding.label,
      hint: t.fields.carousel.fields.padding.hint,
      widget: 'number',
      min: 0,
      hint: 'Exprimé en rem',
      required: false,
      i18n: 'duplicate'
    },
    {
      name: 'gap',
      label: t.fields.carousel.fields.gap.label,
      hint: t.fields.carousel.fields.gap.hint,
      widget: 'number',
      min: 0,
      hint: 'Exprimé en rem',
      required: false,
      i18n: 'duplicate'
    }
  ]
};
