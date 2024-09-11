export const fields = {
  address: {
    label: 'Adresse',
    fields: {
      street: 'Numéro et nom de rue',
      zipcode: 'Code postal',
      city: 'Ville',
      country: 'Pays',
      coordinates: {
        label: 'Coordonnées géographique',
        hint: 'Pour connaitre facilement vos coordonnées : https://www.latlong.net/convert-address-to-lat-long.html'
      },
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
  arguments: {
    label: 'Arguments',
    label_singular: 'Arguments'
  },
  author: 'Auteur',
  authors: {
    label: 'Auteurs ?',
    hint: 'Plusieurs auteurs possible'
  },
  autoplay: 'Lecture automatique ?',
  background: 'Ajouter une couleur d’arrière plan ?',
  background_color: 'Couleur du fond',
  badge: {
    label: 'Badge',
    hint: 'Afficher un badge text'
  },
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
  controls: 'Boutons de controle ?',
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
  discount: {
    label: 'Réduction',
    hint: 'Montant de la réduction, ex: 30%',
    pattern: 'Seulement un montant (sans la devise) ou un pourcentage'
  },
  documents: 'Documents',
  draft: 'Brouillon',
  email: 'Email',
  embed: 'Embed',
  expertises_items: 'Expertises',
  featured_image: {
    label: 'Image mise en avant',
    hint: 'Affichée dans les résultats de recherche et dans la prévisualition SMS/Messages/Réseaux sociaux'
  },
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
    label: 'Section de haut de page',
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
  image_compression: 'Capture d’écran ?',
  image_src: {
    label: 'Image',
    hint: 'Redimensionner et compresser l’image avant de l’envoyer : https://bulkresizephotos.com/fr?quality=90&type=width&width=1600'
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
  is_highlighted: 'Mis en avant ?',
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
  location: 'Localisation',
  logo: {
    label: 'Logo',
    hint: 'Compresser le logo avant de l’envoyer : https://tinypng.com/'
  },
  loop: 'En boucle ?',
  material_icons: {
    label: 'Icône',
    hint: 'Le nom de l’icon, doc : https://fonts.google.com/icons?icon.set=Material+Icons'
  },
  name: 'Nom',
  notes: {
    label: 'Notes',
    label_singular: 'Note',
    hint: 'Pour lier un mot du texte à une note, suffixez le avec "[\\*]". Les notes et les "[\\*]" sont liés par leur ordre.',
    field: {
      label: 'Texte'
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
  page_description: {
    label: 'Description',
    hint: 'Affichée dans les résultats de recherche et dans la prévisualisation SMS/Messages/Réseaux sociaux'
  },
  page_title: {
    label: 'Titre de la page',
    hint: 'Affiché dans les onglets, dans les résultats de recherche et dans la prévisualition SMS/Messages/Réseaux sociaux'
  },
  pages: 'Pages',
  pdf: {
    label: 'PDF',
    hint: 'Compresser le PDF avant de l’envoyer  https://www.adobe.com/fr/acrobat/online/compress-pdf.html'
  },
  persons: 'Personnes',
  persons_expertises: 'Expert en ?',
  persons_places: 'Rattaché à un ou plusieurs lieux ?',
  persons_statutes: 'Satut',
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
  products: 'Produits',
  products_categories: 'Catégories',
  products_tags: 'Tags',
  projects: 'Projets',
  projects_tags: 'Tags',
  projects_types: 'Types',
  publications: 'Parutions',
  publications_categories: 'Catégorie',
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
  show_places: {
    label: 'Afficher tous les lieux enregistrés ?',
    hint: 'Seulement si vous avez des lieux déjà enregistrés (ceci désactivera le repère ci-dessous)'
  },
  sold: 'Vendu ?',
  screenshot: 'Ajouter un habillage navigateur',
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
  transcription: 'Transcription',
  twitter: {
    label: 'Twitter',
    hint: "Nom d'utilisateur"
  },
  url: 'URL',
  value: 'Valeur',
  value_number: 'Valeur',
  video: {
    label: 'Vidéo',
    mp4: {
      label: 'MP4',
      hint: 'Vidéo au format MP4'
    },
    poster: 'Image de la vidéo',
    webm: {
      label: 'WEBM',
      hint: 'Vidéo au format WEBM'
    }
  },
  website: {
    label: 'Site web',
    hint: 'URL (https://…)'
  },
  weight: 'Ordre d’importance',
  zoom: 'Zoom'
};
