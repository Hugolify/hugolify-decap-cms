export const fields = {
  address: {
    label: 'Adresse',
    fields: {
      street: 'Numéro et nom de rue',
      zipcode: 'Code postal',
      city: 'Ville',
      country: 'Pays',
      coordinates: 'Coordonnées géographique',
      lat: 'Latitude',
      lng: 'Longitude'
    }
  },
  align: {
    label: 'Alignement du texte',
    options: {
      start: 'à gauche',
      end: 'à droite',
      center: 'au centre'
    }
  },
  author: 'Auteur',
  authors: {
    label: 'Auteurs ?',
    hint: 'Plusieurs auteurs possible'
  },
  background: 'Ajouter une couleur d’arrière plan ?',
  background_color: 'Couleur du fond',
  blank: 'Ouvrir le lien dans une nouvelle fenêtre ?',
  body: 'Contenu',
  carousel: {
    label: 'Configuration du carrousel',
    fields: {
      arrows: 'Flêches',
      autoplay: 'Autoplay',
      breakpoints: {
        label: 'Breakpoints',
        hint: 'Dimension de l’écran (maximum)',
        options: {
          mobile: 'Mobile',
          tablet: 'Tablet',
          wide_tablet: 'Tablet large',
          laptop: 'Portable',
          desktop: 'Bureau'
        }
      },
      focus: {
        label: 'Focus',
        hint: 'Le slide actif est-il au centre de l’écran ?'
      },
      gap: {
        label: 'Goutière',
        hint: 'L’écart entre les slides (exprimé en rem)'
      },
      padding: {
        label: 'Espace',
        hint: 'Espace gauche/droite du carrousel (exprimé en rem)'
      },
      pagination: 'Pagination',
      params: 'Paramètres',
      perPage: {
        label: 'Par page',
        hint: 'Nombre d’élément affiché à l’écran'
      },
      responsive: 'Responsive',
      type: 'Type'
    }
  },
  casestudies: 'Cas d’études',
  categories: 'Catégories',
  chart: {
    label: 'Graphique',
    fields: {
      type: {
        label: 'Type',
        options: {
          bar: 'Bar',
          pie: 'Camembert',
          line: 'Ligne',
          polarArea: 'Zone polaire',
          radar: 'Radar'
        }
      },
      items: {
        label: 'Données',
        fields: {
          label: 'Label',
          value: 'Valeur',
          color: 'Couleur'
        }
      },
      data: 'Données en mode expert'
    }
  },
  code: 'Code',
  color: 'Couleur',
  column: 'Nombre de colonnes',
  contact: 'Contact',
  count: 'Nombre d’éléments',
  credit: 'Crédit',
  cta: 'Bouton',
  cta_second: 'Second bouton',
  darken: 'Assombrir l’image',
  datas: 'Données',
  date: {
    from: 'De',
    publish: 'Date de publication',
    title: 'Date',
    to: 'à'
  },
  description: 'Description',
  diagnostic: {
    label: 'Diagnostic',
    fields: {
      dpe: 'DPE: kWh/m2.an',
      ges: 'GES: CO2/m2.an'
    }
  },
  direction: {
    label: 'Direction',
    options: {
      ltr: 'texte à gauche / image à droite',
      rtl: 'image à gauche / texte à droite'
    }
  },
  documents: 'Documents',
  draft: 'Brouillon',
  email: 'Email',
  embed: 'Embed',
  expertises_items: 'Expertises',
  featured_image: 'Image mise en avant',
  figure: 'Image avec légende',
  gallery: 'Galerie d’images',
  grid: {
    label: 'Largeur sur la grille',
    options: {
      small: 'Petit',
      medium: 'Moyen',
      large: 'Large',
      full: 'Full'
    }
  },
  half: 'Demi-taille ?',
  heading: 'En-tête',
  hero: {
    label: 'Hero',
    fields: {
      image: {
        label: 'Image',
        fields: {
          background_image: 'Image de fond ?'
        }
      }
    }
  },
  icon: {
    label: 'Icône',
    hint: 'Le nom de l’icône, doc : https://icons.getbootstrap.com/#icons'
  },
  image: 'Image',
  image_alt: {
    label: 'Text alternatif',
    hint: 'Pour une image porteuse d’information (laisser vide si image de décoration)'
  },
  image_src: {
    label: 'Image',
    hint: 'Redimensionner et compresser l’image avant de l’envoyer : https://bulkresizephotos.com/fr?quality=0.90&type=width&value=1600'
  },
  images: 'Liste d’images',
  informations: {
    label: 'Informations',
    fields: {
      area: {
        label: 'Surface intérieur',
        hint: 'Exprimé en m2'
      },
      bathrooms: 'Nombre de salles de bain',
      bedrooms: 'Nombre de chambres',
      district: 'Quartier',
      field: {
        label: 'Surface extérieur',
        hint: 'Exprimé en m2'
      },
      floor: 'Étage',
      levels: 'Nombre de niveaux',
      rooms: 'Nombre de pièces',
      showerrooms: 'Nombre de salles d’eau',
      year: 'Année de construction'
    }
  },
  instagram: {
    label: 'Instagram',
    hint: 'URL (https://…)'
  },
  is_index: 'Est un index ?',
  is_not_index: "N'est pas un index ?",
  is_page: 'Est une page ?',
  keyfeatures: {
    label: 'Caractéristiques principales',
    hint: 'ex: Emplacement, lumière…'
  },
  layout: {
    label: 'Affichage',
    options: {
      carousel: 'Carrousel',
      grid: 'Grille'
    }
  },
  layout_blocks: 'Layout',
  legend: 'Légende',
  limit: {
    label: 'Limite',
    hint: 'ex: 100'
  },
  linkedin: 'Linkedin',
  links: {
    label: 'Liens',
    label_singular: 'Lien'
  },
  logo: {
    label: 'Logo',
    hint: 'Compresser le logo avant de l’envoyer : https://tinypng.com/'
  },
  location: 'Localisation',
  material_icons: {
    label: 'Icône',
    hint: 'Le nom de l’icon, doc : https://fonts.google.com/icons?icon.set=Material+Icons'
  },
  name: 'Nom',
  notes: {
    label: 'Notes',
    label_singular: 'Note',
    hint: 'Liez la note à un mot en le suffixant de "[n]", avec n le numéro de la note. Ex: "SEO[1]" dans le texte, et dans les notes: 1: "Search engine optimisation".',
    fields: {
      id: {
        label: 'Id',
        hint: 'Identifiant de la note. Ex: "1" pour lier la note au [1] dans le paragraphe.'
      },
      text: {
        label: 'Texte'
      }
    }
  },
  offer: 'Offre',
  offset: {
    label: 'Alignement',
    options: {
      start: 'à gauche',
      end: 'à droite',
      center: 'au centre'
    }
  },
  pages: 'Pages',
  pdf: {
    label: 'PDF',
    hint: 'Compresser le PDF avant de l’envoyer  https://www.adobe.com/fr/acrobat/online/compress-pdf.html'
  },
  persons: 'Personnes',
  phone: {
    label: 'Téléphone',
    hint: '+33 (0) …'
  },
  places_items: 'Lieux',
  posts: 'Actualités',
  prefix: 'Préfixe',
  press: 'Source de l’article',
  price: {
    hide: 'Cacher le prix',
    label: 'Prix',
    hint: 'ex: 300000 (pour 300 000 €)'
  },
  projects: 'Projets',
  projects_tags: 'Tags',
  projects_types: 'Types',
  publications: 'Parutions',
  publications_persons: {
    label: 'Personnes concernées ?',
    hint: 'Plusieurs personnes possible'
  },
  quote: 'Citation',
  realestates_persons: {
    label: 'Personnes responsables ?',
    hint: 'Plusieurs personnes possible'
  },
  realestates_sellers: 'Vendeur du bien',
  realestates_status: {
    label: 'Statut',
    hint: 'ex: Nous consulter'
  },
  realestates_categories: 'Type de bien',
  reference: 'Référence',
  section: 'Type de section',
  services: 'Services',
  services_categories: 'Catégorie de service',
  services_persons: {
    label: 'Personnes responsables ?',
    hint: 'Plusieurs personnes possible'
  },
  show_color: {
    label: 'Afficher des couleurs sur les jauges ?',
    hint: 'Colore en rouge, jaune ou vert en fonction de la valeur (si jauge coché)'
  },
  show_gauge: 'Afficher une jaune de progression ?',
  show_more: 'Afficher un bouton pour découvrir plus d’éléments ?',
  sold: 'Vendu ?',
  state: {
    label: 'État',
    options: {
      light: 'Normal',
      warning: 'Informatif',
      danger: 'Important'
    }
  },
  sublinks: {
    label: 'Liens',
    label_singular: 'Lien'
  },
  subtitle: 'Sous-titre',
  suffix: {
    label: 'Suffixe',
    hint: 'ex: %'
  },
  surtitle: 'Surtitre',
  tags: 'Tags',
  target: 'URL',
  text: 'Texte',
  text_area: 'Texte',
  text_markdown: 'Texte',
  title: 'Titre / Nom',
  twitter: {
    label: 'Twitter',
    hint: "Nom d'utilisateur"
  },
  url: 'URL',
  value: 'Valeur',
  value_number: 'Valeur',
  website: {
    label: 'Site web',
    hint: 'URL (https://…)'
  },
  zoom: 'Zoom'
};
