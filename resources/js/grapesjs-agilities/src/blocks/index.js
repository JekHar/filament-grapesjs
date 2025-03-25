import loadTailwindBlocks from './tailwind'
import loadMediaBlocks from './html/media'
import loadTrainingBlocks from './training'
import loadQuoteBlocks from './quote'

export default (editor, opts = {}, openBlock) => {
  loadTailwindBlocks(editor, opts, openBlock);
  loadMediaBlocks(editor, {
    ...opts,
    categoryMedia: 'Media',
    labelBasicImage: 'Basic Image',
    labelResponsiveImage: 'Responsive Image',
    labelVideo: 'Video Player',
    labelYoutubeVideo: 'YouTube Video',
    labelVimeoVideo: 'Vimeo Video',
    labelAudio: 'Audio Player',
    labelBackgroundImage: 'Background Image',
    labelSvg: 'SVG Element',
    labelGallery: 'Image Gallery',
    labelIcon: 'Icon Element',
    labelMediaCaption: 'Media with Caption',
  });

  loadTrainingBlocks(editor, {
    ...opts,
    openCategory: opts.openCategory
  });

  loadQuoteBlocks(editor, opts);
}
