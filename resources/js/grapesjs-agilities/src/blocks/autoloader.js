/**
 * Auto-discovery blocks system
 * This module automatically loads all block modules from the specified directories
 */

// Using the webpack require.context for automatic module discovery
// This function requires webpack to work properly
const loadAllBlocks = (editor, opts = {}) => {
    // Auto-discover block modules in the ./blocks directory
    const blockModulesContext = require.context('./blocks', true, /\.js$/);
    const htmlBlocksContext = require.context('./html', true, /\.js$/);

    // Load modules from the 'blocks' directory
    blockModulesContext.keys().forEach(key => {
        // Skip index.js and any non-block modules
        if (key === './index.js' || key.includes('util') || key.includes('helper')) {
            return;
        }

        // Import and load the block module
        const blockModule = blockModulesContext(key).default;
        if (typeof blockModule === 'function') {
            blockModule(editor, opts);
        }
    });

    // Load modules from the 'html' directory
    htmlBlocksContext.keys().forEach(key => {
        // Skip non-loader files (files that export blocks but don't load them)
        if (!key.includes('loader') && !key.includes('index')) {
            return;
        }

        // Import and load the block module
        const blockModule = htmlBlocksContext(key).default;
        if (typeof blockModule === 'function') {
            blockModule(editor, opts);
        }
    });
};

export default loadAllBlocks;