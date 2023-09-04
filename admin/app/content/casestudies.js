import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { title } from '../fields/title.js'
import { hero } from '../fields/hero.js'
import { blocks } from '../blocks/blocks.js'
import {t} from "../i18n/translater.js";

const casestudies = {
    name: 'casestudies',
    label: t.content.casestudies.label,
    label_singular: t.content.casestudies.label_singular,
    folder: 'content/casestudies',
    create: true,

    editor: { preview: false },

    i18n: true,

    slug: '{{slug}}',
    path: '{{year}}/{{slug}}',

    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        draft,
        date,
        title,
        description,
        featured_image,
        hero,
        blocks
    ]

}

export default casestudies