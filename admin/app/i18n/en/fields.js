export const fields = {
  address: {
    label: 'Address',
    fields: {
      street: 'Street',
      zipcode: 'Zipcode',
      city: 'City',
      country: 'Country',
      coordinates: {
        label: 'Geographic coordinates',
        hint: 'To easily find your coordinates: https://www.latlong.net/convert-address-to-lat-long.html'
      },
      lat: 'Latitude',
      lng: 'Longitude'
    }
  },
  align: {
    label: 'Text alignment',
    options: {
      start: 'to the left',
      center: 'centered',
      end: 'to the right'
    }
  },
  author: 'Author',
  authors: {
    label: 'Authors?',
    hint: 'Many authors possible'
  },
  autoplay: 'Autoplay?',
  background: 'Add background color?',
  background_color: 'Background color',
  blank: 'Open in new page?',
  body: 'Body',
  carousel: {
    label: 'Carousel configuration',
    fields: {
      arrows: 'Arrows',
      autoplay: 'Autoplay',
      breakpoints: {
        label: 'Breakpoints',
        hint: 'Screen dimension (maximum)',
        options: {
          mobile: 'Mobile',
          tablet: 'Tablet',
          wide_tablet: 'Wide tablet',
          laptop: 'Laptop',
          desktop: 'Desktop'
        }
      },
      focus: {
        label: 'Focus',
        hint: 'Is the active slide in the center of the screen?'
      },
      gap: {
        label: 'Padding',
        hint: 'The gap between slides. In rem value.'
      },
      padding: {
        label: 'Padding',
        hint: 'Padding left/right of the carousel. In rem value'
      },
      pagination: 'Pagination',
      params: 'Params',
      perPage: {
        label: 'Per page',
        hint: 'Number of slides to display'
      },
      responsive: 'Responsive',
      type: 'Type'
    }
  },
  casestudies: 'Case studies',
  categories: 'Categories',
  chart: {
    label: 'Graphic',
    fields: {
      type: {
        label: 'Type',
        options: {
          bar: 'Bar',
          pie: 'Pie',
          line: 'Line',
          polarArea: 'Polar area',
          radar: 'Radar'
        }
      },
      items: {
        label: 'Data',
        fields: {
          label: 'Label',
          value: 'Value',
          color: 'Color'
        }
      },
      data: 'Data in expert mode'
    }
  },
  code: 'Code',
  color: 'Color',
  column: 'Number of columns',
  contact: 'Contact',
  controls: 'Control buttons?',
  count: 'Number of elements',
  credit: 'Credit',
  cta: 'Button',
  cta_second: 'Secondary button',
  darken: 'Darken image',
  datas: 'Datas',
  date: {
    from: 'From',
    publish: 'Publication date',
    title: 'Date',
    to: 'To'
  },
  description: 'Description',
  diagnostic: {
    label: 'Diagnostic',
    fields: {
      dpe: 'DPE: kWh/m2.year',
      ges: 'GES: CO2/m2.year'
    }
  },
  direction: {
    label: 'Direction',
    options: {
      ltr: 'text on left / image on right',
      rtl: 'image on left / text on right'
    }
  },
  documents: 'Documents',
  draft: 'Draft',
  email: 'Email',
  embed: 'Embed',
  expertises_items: 'Expertises',
  featured_image: 'Featured image',
  figure: 'Image with legend',
  files: 'Files',
  gallery: 'Image gallery',
  grid: {
    label: 'Width on grid',
    options: {
      small: 'Small',
      medium: 'Medium',
      large: 'Large',
      full: 'Full'
    }
  },
  half: 'Half size?',
  heading: 'Heading',
  hero: {
    label: 'Hero',
    fields: {
      image: {
        label: 'Image',
        fields: {
          background_image: 'Background image?'
        }
      }
    }
  },
  icon: {
    label: 'Icon',
    hint: 'Name of the icon, doc : https://icons.getbootstrap.com/#icons'
  },
  image: 'Image',
  image_alt: {
    label: 'Alternative text',
    hint: 'For an image that conveys information (leave blank if decorative image)'
  },
  image_src: {
    label: 'Image',
    hint: 'Resize and compress image before sending: https://bulkresizephotos.com/fr?quality=0.90&type=width&value=1600'
  },
  images: 'Image list',
  informations: {
    label: 'Informations',
    fields: {
      area: {
        label: 'Interior area',
        hint: 'Expressed in m2'
      },
      bathrooms: 'Number of bathrooms',
      bedrooms: 'Number of bedrooms',
      district: 'District',
      field: {
        label: 'Exterior area',
        hint: 'Expressed in m2'
      },
      floor: 'Floor',
      levels: 'Number of levels',
      rooms: 'Number of rooms',
      showerrooms: 'Number of shower rooms',
      year: 'Year of construction'
    }
  },
  instagram: {
    label: 'Instagram',
    hint: 'URL (https://…)'
  },
  is_index: 'Is index?',
  is_not_index: 'Is not index?',
  is_page: 'Is page?',
  keyfeatures: {
    label: 'Key features',
    hint: 'e.g.: Location, light…'
  },
  layout: {
    label: 'Layout',
    options: {
      carousel: 'Carousel',
      grid: 'Grid'
    }
  },
  layout_blocks: 'Layout',
  legend: 'Legend',
  limit: {
    label: 'Limit',
    hint: 'e.g.: 100'
  },
  linkedin: 'Linkedin',
  links: {
    label: 'Links',
    label_singular: 'Link'
  },
  logo: {
    label: 'Logo',
    hint: 'Compress logo before sending: https://tinypng.com/'
  },
  location: 'Location',
  material_icons: {
    label: 'Icon',
    hint: 'Name of the icon, doc: https://fonts.google.com/icons?icon.set=Material+Icons'
  },
  name: 'Name',
  notes: {
    label: 'Notes',
    label_singular: 'Note',
    hint: 'To link a word in the text to a note, suffix it with "[*]". Notes and "[\\*]" are linked by their order.',
    field: {
      label: 'Text'
    }
  },
  offer: 'Offer',
  offset: {
    label: 'Offset',
    options: {
      start: 'at left',
      end: 'at right',
      center: 'at center'
    }
  },
  pages: 'Pages',
  pdf: {
    label: 'PDF',
    hint: 'Compress PDF before sending: https://www.adobe.com/fr/acrobat/online/compress-pdf.html'
  },
  persons: 'Persons',
  persons_expertises: 'Expert in?',
  persons_places: 'Attached to one or more places?',
  persons_statutes: 'Status',
  phone: {
    label: 'Phone',
    hint: ' '
  },
  places_items: 'Places',
  posts: 'News',
  prefix: 'Prefix',
  press: 'Article source',
  price: {
    hide: 'Hide price',
    label: 'Price',
    hint: 'e.g.: 300000 (for 300 000 €)'
  },
  price_per_unit: {
    label: 'Price per unit',
    hint: 'e.g.: 300€ per m2'
  },
  projects: 'Projects',
  projects_tags: 'Tags',
  projects_types: 'Types',
  publications: 'Publications',
  publications_persons: {
    label: 'Persons concerned?',
    hint: 'Several persons possible'
  },
  quote: 'Quote',
  realestates_persons: {
    label: 'Responsible persons?',
    hint: 'Several persons possible'
  },
  realestates_sellers: 'Seller',
  realestates_categories: 'Type of property',
  realestates_status: {
    label: 'Status',
    hint: 'e.g.: Consult us'
  },
  reference: 'Reference',
  section: 'Type of section',
  services: 'Services',
  services_categories: 'Category of service',
  services_persons: {
    label: 'Responsible persons?',
    hint: 'Several persons possible'
  },
  show_color: {
    label: 'Display colors on gauge?',
    hint: 'Color in red, yellow or green in function of value (if gauge checked)'
  },
  show_gauge: 'Display a progress gauge?',
  show_more: 'Display a button to discover more elements?',
  sold: 'Sold?',
  screenshot: {
    label: 'Screenshot?',
    hint: 'This will add a browser skin'
  },
  state: {
    label: 'State',
    options: {
      light: 'Normal',
      warning: 'Informative',
      danger: 'Important'
    }
  },
  sublinks: {
    label: 'Links',
    label_singular: 'Links'
  },
  subtitle: 'Subtitle',
  suffix: {
    label: 'Suffix',
    hint: 'e.g.: %'
  },
  surtitle: 'Surtitle',
  tags: 'Tags',
  target: 'URL',
  text: 'Text',
  text_area: 'Text',
  text_markdown: 'Text',
  title: 'Title / Name',
  transcription: 'Transcription',
  twitter: {
    label: 'Twitter',
    hint: 'Username'
  },
  unit: 'Unit',
  url: 'URL',
  value: 'Value',
  value_number: 'Value',
  video: {
    label: 'Video',
    mp4: {
      label: 'MP4',
      hint: 'Video in MP4 format'
    },
    poster: 'Image from video',
    webm: {
      label: 'WEBM',
      hint: 'Video in WEBM format'
    }
  },
  website: {
    label: 'Website',
    hint: 'URL (https://…)'
  },
  weight: 'Importance order',
  zoom: 'Zoom'
};
