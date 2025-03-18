import MediaLibraryLaravelGrapesjs from './media-library-laravel-grapesjs.js';
import NonEditableComponentsGrapesJs from './non-editable-component-grapesjs.js';

/* global grapesjs */
/* global Alpine */
document.addEventListener('alpine:init', () => {
    Alpine.data(
        "grapesjs",
        ({ state, statePath, readOnly, tools, minHeight, container }) => ({
            editor: null,
            initialContent: state,
            toolsConfig: tools,
            nonEditableManager: null,
            assetManager: null,

            init() {
                this.initializeEditor();
                this.setupContentHandling();
            },

            /**
             * Initialize the GrapesJS editor with configuration
             */
            initializeEditor() {
                // Configure asset manager
                this.assetManager = new MediaLibraryLaravelGrapesjs({
                    uploadUrl: '/grapesjs/media',
                    fetchUrl: '/grapesjs/media'
                });

                // Initialize editor with the appropriate configuration
                this.editor = grapesjs.init({
                    height: minHeight + 'px',
                    container: container ? container : ".filament-grapesjs .grapesjs-wrapper",
                    showOffsets: true,
                    fromElement: true,
                    noticeOnUnload: false,
                    storageManager: false,
                    loadHtml: this.initialContent,
                    panels: {
                        defaults: [
                            {
                                buttons: [
                                    {
                                        attributes: { title: 'Open Code' },
                                        className: 'fa fa-code',
                                        command: 'open-code',
                                        id: 'open-code'
                                    }
                                ],
                                id: 'views'
                            }
                        ]
                    },
                    plugins: [
                        "grapesjs-tailwind",
                        "grapesjs-preset-webpage",
                        "grapesjs-component-code-editor",
                        "grapesjs-custom-code"
                    ],
                    assetManager: this.assetManager.getConfig()
                });

                // Initialize non-editable components plugin
                this.nonEditableManager = new NonEditableComponentsGrapesJs(this.editor);

                // Initialize asset manager with the editor instance
                this.assetManager.init(this.editor);
            },

            /**
             * Set up content saving and handling
             */
            setupContentHandling() {
                // Save content while filtering out non-editable components
                this.editor.on('update', () => {
                    let content = this.editor.getHtml({
                        cleanId: true
                    });
                    const extract = content.match(/<body\b[^>]*>([\s\S]*?)<\/body>/);
                    const fullContent = extract ? extract[1] : content;

                    // Use the non-editable plugin to clean HTML
                    const editableContent = this.nonEditableManager.removeNonEditableComponentsFromHtml(fullContent);

                    this.initialContent = editableContent.trim();
                });
            }
        })
    );
});