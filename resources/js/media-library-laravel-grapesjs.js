export default class MediaLibraryLaravelGrapesjs {
    /**
     * Create a new MediaLibraryLaravelGrapesjs instance
     * @param {Object} options - Configuration options
     */
    constructor(options = {}) {
        this.config = {
            uploadUrl: '/grapesjs/media',
            fetchUrl: '/grapesjs/media',
            ...options
        };

        this.editor = null;
    }

    /**
     * Initialize the plugin with an editor instance
     * @param {Object} editor - The GrapesJS editor instance
     */
    init(editor) {
        this.editor = editor;
        this.loadAssets();
    }

    /**
     * Get the asset manager configuration
     * @returns {Object} - Configuration for GrapesJS asset manager
     */
    getConfig() {
        return {
            upload: this.config.uploadUrl,
            autoAdd: true,
            assets: [],
            uploadFile: e => this.handleFileUpload(e)
        };
    }

    /**
     * Handle file uploads to the asset manager
     * @param {Event} e - The upload event
     */
    handleFileUpload(e) {
        if (!this.editor) {
            console.error('Editor not initialized');
            return;
        }

        const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append('files[]', files[i]);
        }

        fetch(this.config.uploadUrl, {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
            },
            body: formData
        })
            .then(response => {
                if (!response.ok) throw new Error('Upload failed');
                return response.json();
            })
            .then(result => {
                if (Array.isArray(result)) {
                    result.forEach(asset => {
                        this.editor.AssetManager.add(asset);
                    });
                } else {
                    this.editor.AssetManager.add([result]);
                }
            })
            .catch(error => console.error('Error:', error));
    }

    /**
     * Load assets from the server
     */
    loadAssets() {
        if (!this.editor) {
            console.error('Editor not initialized');
            return;
        }

        fetch(this.config.fetchUrl)
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch assets');
                return response.json();
            })
            .then(assets => {
                if (Array.isArray(assets)) {
                    this.editor.AssetManager.add(assets);
                }
            })
            .catch(error => console.error('Error:', error));
    }
}