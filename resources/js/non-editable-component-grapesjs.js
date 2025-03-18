export default class NonEditableComponentsGrapesJs {
    /**
     * Create a new NonEditableComponentsPlugin instance
     * @param {Object} editor - The GrapesJS editor instance
     */
    constructor(editor) {
        this.editor = editor;
        this.originalCodeViewHtml = null;
        this.filteredCodeViewHtml = null;

        this.initialize();
    }

    /**
     * Initialize the plugin
     */
    initialize() {
        this.registerComponentType();
        this.setupEventListeners();
        this.overrideCodeCommand();
    }

    /**
     * Register the non-editable component type
     */
    registerComponentType() {
        this.editor.Components.addType('non-editable', {
            model: {
                defaults: {
                    editable: false,
                    draggable: false,
                    droppable: false,
                    copyable: false,
                    removable: false,
                    highlightable: false,
                    selectable: false,
                }
            },
            view: {
                events: {
                    click: e => e.stopPropagation(),
                    dblclick: e => e.stopPropagation(),
                    mousedown: e => e.stopPropagation()
                },
                onRender({ el }) {
                    el.style.pointerEvents = 'none';
                    el.style.opacity = '0.8';
                }
            }
        });
    }

    /**
     * Set up all event listeners
     */
    setupEventListeners() {
        // Process components after loading
        this.editor.on('load', () => this.processNonEditableComponents());

        // Handle component updates
        this.editor.on('component:update', component => {
            if (component.getClasses().includes('gjs-non-editable')) {
                this.applyNonEditableProperties(component);
            }
        });

        // Handle new components
        this.editor.on('component:add', component => {
            if (component.getClasses().includes('gjs-non-editable')) {
                this.applyNonEditableProperties(component);
            }
        });

        // Handle code view
        this.editor.on('codeEdit:before', () => {
            // Store the original HTML
            this.originalCodeViewHtml = this.editor.getHtml();

            // Get HTML without non-editable components
            let cleanHtml = this.editor.getHtml();
            cleanHtml = this.removeNonEditableComponentsFromHtml(cleanHtml);

            // Store clean HTML for later comparison
            this.filteredCodeViewHtml = cleanHtml;

            // Set the filtered HTML for code view
            this.editor.setCustomCode(cleanHtml);
        });

        this.editor.on('codeEdit:after', () => {
            // If we have stored original HTML, restore it
            if (this.originalCodeViewHtml) {
                // Get the current code
                const currentCode = this.editor.getCustomCode();

                // Only restore if the user hasn't modified the code
                if (this.filteredCodeViewHtml === currentCode) {
                    this.editor.DomComponents.getWrapper().set(
                        'content',
                        this.originalCodeViewHtml
                    );
                }

                // Clear stored HTML
                this.originalCodeViewHtml = null;
                this.filteredCodeViewHtml = null;
            }
        });
    }

    /**
     * Override the open-code command
     */
    overrideCodeCommand() {
        this.editor.Commands.add('open-code', {
            run: (editor, sender) => {
                // Get original HTML
                const originalHtml = editor.getHtml();

                // Create temp DOM element to manipulate HTML
                const tempEl = document.createElement('div');
                tempEl.innerHTML = originalHtml;

                // Find and remove all non-editable elements
                const nonEditableElements = tempEl.querySelectorAll('.gjs-non-editable');
                nonEditableElements.forEach(el => el.parentNode.removeChild(el));

                // Get clean HTML
                const cleanHtml = tempEl.innerHTML;

                // Store clean HTML for later comparison
                editor._filteredCodeViewHtml = cleanHtml;
                editor._originalCodeViewHtml = originalHtml;

                // Open code editor with clean HTML
                editor.Modal.open({
                    title: 'Code Editor',
                    content: `<textarea style="width:100%; height:250px;">${cleanHtml}</textarea>`,
                    attributes: { class: 'gjs-modal-code' }
                });
            }
        });
    }

    /**
     * Apply non-editable properties to a component
     * @param {Object} component - The component to make non-editable
     */
    applyNonEditableProperties(component) {
        component.set({
            type: 'non-editable',
            editable: false,
            draggable: false,
            droppable: false,
            copyable: false,
            removable: false,
            highlightable: false,
            selectable: false,
        });

        // Also add a special attribute to ensure consistency
        component.addAttributes({ 'data-gjs-locked': true });

        // Make it visually distinct and non-interactive
        const el = component.getEl();
        if (el) {
            el.style.pointerEvents = 'none';
            el.style.opacity = '0.8';
        }
    }

    /**
     * Process all components to mark non-editable ones
     */
    processNonEditableComponents() {
        // Get all components
        const allComponents = this.editor.Components.getWrapper().find('*');

        // Find elements with the gjs-non-editable class and set their type
        allComponents.forEach(component => {
            const classes = component.getClasses();
            if (classes.includes('gjs-non-editable')) {
                this.applyNonEditableProperties(component);
            }
        });
    }

    /**
     * Remove non-editable components from HTML string
     * @param {string} html - The HTML string to process
     * @returns {string} - The HTML with non-editable components removed
     */
    removeNonEditableComponentsFromHtml(html) {
        // Create a temporary DOM element to parse the HTML
        const tempEl = document.createElement('div');
        tempEl.innerHTML = html;

        // Find and remove all elements with the gjs-non-editable class
        const elements = tempEl.getElementsByClassName('gjs-non-editable');
        // We need to use Array.from because the collection changes as we remove elements
        Array.from(elements).forEach(el => el.parentNode.removeChild(el));

        return tempEl.innerHTML;
    }
}