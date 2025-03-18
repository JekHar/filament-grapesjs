export default function(editor, opts = {}) {
    const bm = editor.BlockManager;
    const category = opts.categoryMedia || 'Media';

    // Common block properties
    const commonBlockProps = {
        category,
        select: true,
    };

    // Basic Image Block
    bm.add('media-basic-image', {
        ...commonBlockProps,
        label: opts.labelBasicImage || 'Image',
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
    </svg>`,
        content: {
            type: 'image',
            style: {
                'width': '100%',
                'height': 'auto',
                'border-radius': '0.5rem'
            },
            attributes: {
                alt: 'Image description',
                class: 'w-full h-auto rounded-lg'
            }
        }
    });

    // Responsive Image Block
    bm.add('media-responsive-image', {
        ...commonBlockProps,
        label: opts.labelResponsiveImage || 'Responsive Image',
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />
      <rect x="2" y="2" width="20" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
    </svg>`,
        content: {
            type: 'image',
            style: {
                'width': '100%',
                'height': 'auto',
                'border-radius': '0.5rem',
                'object-fit': 'cover',
                'box-shadow': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            },
            attributes: {
                alt: 'Image description',
                class: 'w-full h-auto object-cover rounded-lg shadow-md'
            }
        }
    });

    // Basic Video Block
    bm.add('media-basic-video', {
        ...commonBlockProps,
        label: opts.labelVideo || 'Video',
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
    </svg>`,
        content: {
            type: 'video',
            style: {
                'width': '100%',
                'height': 'auto',
                'border-radius': '0.5rem'
            },
            attributes: {
                controls: true,
                class: 'w-full h-auto rounded-lg'
            },
            src: 'https://www.w3schools.com/html/mov_bbb.mp4'
        }
    });

    // YouTube Video Block
    bm.add('media-youtube-video', {
        ...commonBlockProps,
        label: opts.labelYoutubeVideo || 'YouTube Video',
        media: `<svg viewBox="0 0 24 24">
      <path fill="#FF0000" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
    </svg>`,
        content: {
            type: 'video',
            provider: 'yt',
            style: {
                'width': '100%',
                'height': '350px',
                'border-radius': '0.5rem',
                'overflow': 'hidden'
            },
            attributes: {
                class: 'w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'
            },
            src: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        }
    });

    // Vimeo Video Block
    bm.add('media-vimeo-video', {
        ...commonBlockProps,
        label: opts.labelVimeoVideo || 'Vimeo Video',
        media: `<svg viewBox="0 0 24 24">
      <path fill="#1AB7EA" d="M22,7.42C21.91,9.37 20.55,12.04 17.92,15.44C15.23,19 12.9,20.75 10.94,20.75C9.66,20.75 8.58,19.59 7.73,17.27C7.03,14.67 6.5,12.08 5.81,9.5C5.05,7.18 4.22,6.03 3.32,6.03C3.11,6.03 2.5,6.4 1.5,7.14L0.5,5.82C1.56,4.89 2.59,3.96 3.59,3.03C4.96,1.79 6.04,1.14 6.84,1.07C8.31,0.93 9.24,1.67 9.65,4.3C10.14,7.5 10.54,9.53 10.76,10.38C11.26,12.2 11.8,13.11 12.37,13.11C12.82,13.11 13.5,12.39 14.41,10.96C15.31,9.53 15.77,8.46 15.84,7.76C16,6.58 15.5,6 14.41,6C13.87,6 13.3,6.1 12.7,6.32C13.71,3.14 15.85,1.46 19.11,1.3C21.5,1.18 22.68,2.57 22.64,5.52C22.64,6.12 22.53,6.71 22.43,7.42H22Z" />
    </svg>`,
        content: {
            type: 'video',
            provider: 'vimeo',
            style: {
                'width': '100%',
                'height': '350px',
                'border-radius': '0.5rem',
                'overflow': 'hidden'
            },
            attributes: {
                class: 'w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'
            },
            src: 'https://player.vimeo.com/video/76979871'
        }
    });

    // Audio Player Block
    bm.add('media-audio-player', {
        ...commonBlockProps,
        label: opts.labelAudio || 'Audio',
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
    </svg>`,
        content: {
            type: 'audio',
            style: {
                'width': '100%'
            },
            attributes: {
                controls: true,
                class: 'w-full'
            },
            src: 'https://www.w3schools.com/html/horse.mp3'
        }
    });

    // Background Image Container
    bm.add('media-background-image', {
        ...commonBlockProps,
        label: opts.labelBackgroundImage || 'Background Image',
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z" />
      <path fill="currentColor" opacity="0.3" d="M5 5H19V19H5z" />
    </svg>`,
        content: `<div style="background-image: url('/api/placeholder/1200/800'); background-size: cover; background-position: center; background-repeat: no-repeat;" class="w-full py-24 rounded-lg">
      <div data-gjs-droppable="true" data-gjs-custom-name="Content Area" class="container mx-auto px-4 text-center min-h-[100px]">
        <!-- Droppable area for content -->
      </div>
    </div>`
    });

    // SVG Placeholder
    bm.add('media-svg-placeholder', {
        ...commonBlockProps,
        label: opts.labelSvg || 'SVG',
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M5.13,10.71H8.87L6.22,8.06C5.21,8.06 4.39,7.24 4.39,6.22A1.83,1.83 0 0,1 6.22,4.39C7.24,4.39 8.06,5.21 8.06,6.22L10.71,8.87V5.13C10,4.41 10,3.25 10.71,2.54C11.42,1.82 12.58,1.82 13.29,2.54C14,3.25 14,4.41 13.29,5.13V8.87L15.95,6.22C15.95,5.21 16.76,4.39 17.78,4.39C18.79,4.39 19.61,5.21 19.61,6.22C19.61,7.24 18.79,8.06 17.78,8.06L15.13,10.71H18.87C19.59,10 20.75,10 21.46,10.71C22.18,11.42 22.18,12.58 21.46,13.29C20.75,14 19.59,14 18.87,13.29H15.13L17.78,15.95C18.79,15.95 19.61,16.76 19.61,17.78A1.83,1.83 0 0,1 17.78,19.61C16.76,19.61 15.95,18.79 15.95,17.78L13.29,15.12V18.87C14,19.59 14,20.75 13.29,21.46C12.58,22.18 11.42,22.18 10.71,21.46C10,20.75 10,19.59 10.71,18.87V15.12L8.06,17.78C8.06,18.79 7.24,19.61 6.22,19.61C5.21,19.61 4.39,18.79 4.39,17.78C4.39,16.76 5.21,15.95 6.22,15.95L8.87,13.29H5.13C4.41,14 3.25,14 2.54,13.29C1.82,12.58 1.82,11.42 2.54,10.71C3.25,10 4.41,10 5.13,10.71Z" />
    </svg>`,
        content: {
            type: 'svg',
            style: {
                'width': '100%',
                'height': 'auto'
            },
            attributes: {
                viewBox: '0 0 200 100',
                class: 'w-full h-auto'
            },
            content: `<rect width="200" height="100" fill="#f0f0f0" />
      <text x="100" y="50" font-family="Arial" font-size="12" text-anchor="middle" alignment-baseline="middle" fill="#666">SVG Content</text>`
        }
    });

    // Image Gallery (Grid)
    bm.add('media-image-gallery', {
        ...commonBlockProps,
        label: opts.labelGallery || 'Image Gallery',
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6" />
    </svg>`,
        content: `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <img src="/api/placeholder/600/400" alt="Gallery image 1" class="w-full h-64 object-cover rounded-lg shadow-sm" />
      <img src="/api/placeholder/600/400" alt="Gallery image 2" class="w-full h-64 object-cover rounded-lg shadow-sm" />
      <img src="/api/placeholder/600/400" alt="Gallery image 3" class="w-full h-64 object-cover rounded-lg shadow-sm" />
    </div>`
    });

    // Icon Container
    bm.add('media-icon-container', {
        ...commonBlockProps,
        label: opts.labelIcon || 'Icon',
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M10,17L5,12L6.41,10.59L10,14.17L17.59,6.58L19,8L10,17Z" />
    </svg>`,
        content: `<div class="text-center p-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>`
    });

    // Media with Caption
    bm.add('media-with-caption', {
        ...commonBlockProps,
        label: opts.labelMediaCaption || 'Media with Caption',
        media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M21,19H3V5H21V19M6,13H14V11H6V13M6,9H14V7H6V9M6,17H14V15H6V17Z" />
    </svg>`,
        content: `<figure class="w-full">
      <img src="/api/placeholder/800/600" alt="Image with caption" class="w-full h-auto rounded-lg" />
      <figcaption class="text-center text-sm text-gray-600 mt-2">Image caption or description goes here</figcaption>
    </figure>`
    });
}