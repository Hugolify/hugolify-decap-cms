export const blocks = {
  alert: 'Alert',
  blocks: {
    label: 'Content blocs',
    label_singular: 'Content bloc'
  },
  carousel: 'Carousel',
  chart: 'Chart (Pie, bar…)',
  cta: 'Call to action (Button)',
  datas: {
    label: 'Datas blocs (column)',
    fields: {
      items: 'Data'
    }
  },
  editorial: 'Editorial (content and image)',
  embed: 'Embed (iframe)',
  faq: {
    label: 'Q&A',
    fields: {
      items: 'Question/Answer'
    }
  },
  figure: 'Figure (image with its legend)',
  form: {
    label: 'Form',
    fields: {
      name: 'Form id',
      submit: 'Submit button text',
      items: {
        label: 'Fields',
        label_singular: 'Field',
        fields: {
          label: 'Label of field',
          type: {
            label: 'Type of field',
            options: {
              email: 'Email',
              select: 'Select',
              tel: 'Phone',
              text: 'Text',
              textarea: 'Text area'
            }
          },
          options: {
            label: 'Options',
            hint: 'Only for a "Select" field'
          },
          required: 'Is field required?',
          full: 'Field should take full width?',
          placeholder: 'Placeholder',
          autocomplete: {
            label: 'Autocomplete',
            options: {
              postal_code: 'Postal code',
              email: 'Email',
              name: 'Full name',
              family_name: 'Last name',
              street_address: 'Number and name of street',
              country_name: 'Country',
              given_name: 'First name',
              organization: 'Société',
              tel: 'Phone',
              textarea: 'Text area'
            },
            hint: 'Used by browser to autocomplete the field'
          }
        }
      }
    }
  },
  gallery: 'Image gallery',
  images: 'Image list',
  informations: {
    label: 'Informations card blocs (column)',
    fields: {
      items: {
        label: 'Infos',
        label_singular: 'Info',
        fields: {
          image: {
            label: 'Image',
            fields: {
              isLogo: {
                label: 'Is image a logo or icon?',
                hint: 'Will center image in a box'
              }
            }
          }
        }
      }
    }
  },
  instagram: {
    label: 'Feed Instagram',
    fields: {
      token: 'Access_token from Instagram'
    }
  },
  latest: 'Latest items (news, projects…)',
  latestrealestates: 'Latest adds',
  map: 'Map',
  newsletter: {
    label: 'Newsletter',
    fields: {
      form: 'Form',
      url: 'Form URL',
      hiddens: {
        label: 'Hidden fields in form'
      }
    }
  },
  paragraph: 'Paragraph',
  comparison: {
    label: 'Comparison block',
    fields: {
      items: {
        label: 'Columns',
        label_singular: 'Column'
      }
    }
  },
  pushes: {
    label: 'Push blocs (column)',
    fields: {
      items: {
        label: 'Pushes',
        label_singular: 'Push',
        fields: {
          card: 'Text in a bloc',
          image: 'Image'
        }
      }
    }
  },
  quote: 'Quote',
  selectedcasestudies: 'Case studies selection',
  selectedexpertises: 'Expertises selection',
  selectedpages: 'Pages selection',
  selectedpersons: 'Persons selection',
  selectedplaces: 'Places selection',
  selectedposts: 'News selection',
  selectedproducts: 'Products selection',
  selectedprojects: 'Projects selection',
  selectedpublications: 'Publications selection',
  selectedrealestates: 'Real estates selection',
  selectedservices: 'Services selection',
  testimonials: {
    label: 'Testimonials',
    fields: {
      items: {
        label: 'Testimonials',
        label_singular: 'Testimonial'
      }
    }
  },
  title: 'Title',
  video: 'Video'
};
