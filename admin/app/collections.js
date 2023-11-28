import hugolifyConfig from './config.js';

import indexes from './content/indexes.js';
import pages from './content/pages.js';
import availableCollections from './settings/available-collections.js';
import config from './data/config.js';

hugolifyConfig.collections = [indexes, pages, ...availableCollections, config];
window.initCMS({ config: hugolifyConfig });
