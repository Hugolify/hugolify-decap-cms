import { autoplay } from './autoplay.js';
import { controls } from './controls.js';
import { loop } from './loop.js';
import { legend } from './legend.js';
import { mp4 } from './video-mp4.js';
import { screenshot } from './screenshot.js';
import { t } from '../i18n/translater.js';
import { transcription } from './transcription.js';
import { webm } from './video-webm.js';

export const video = {
  name: 'video',
  label: t.fields.video.label,
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  fields: [
    mp4,
    webm,
    controls,
    autoplay,
    loop,
    screenshot,
    legend,
    transcription
  ]
};
