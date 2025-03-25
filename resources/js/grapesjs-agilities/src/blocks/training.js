import {
    trainingTitle,
    trainingText,
    trainingButton,
    trainingFullSection,
    trainingTitleIcon,
    trainingTextIcon,
    trainingButtonIcon,
    trainingFullSectionIcon
} from './html/training';

const getSvgHtml = (svg) => {
    if (typeof window === 'undefined') return ''
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
    return svg.outerHTML
}

// Individual content blocks
const individualTrainingBlocks = [
    {
        id: 'training-title',
        label: trainingTitleIcon,
        content: trainingTitle,
        category: 'Content'
    },
    {
        id: 'training-text',
        label: trainingTextIcon,
        content: trainingText,
        category: 'Content'
    },
    {
        id: 'training-button',
        label: trainingButtonIcon,
        content: trainingButton,
        category: 'Content'
    }
];

// Full section blocks
const fullTrainingBlocks = [
    {
        id: 'training-full-section',
        label: trainingFullSectionIcon,
        content: trainingFullSection,
        category: 'Sections'
    }
];

export default (editor, options = {}) => {
    const bm = editor.BlockManager;

    // Add individual blocks
    individualTrainingBlocks.forEach(block => {
        bm.add(block.id, {
            label: getSvgHtml(editor.$(block.label).get(0)),
            attributes: { class: 'block-full-width' },
            content: block.content,
            category: {
                label: block.category,
                open: block.category === options.openCategory
            }
        });
    });

    // Add full section blocks
    fullTrainingBlocks.forEach(block => {
        bm.add(block.id, {
            label: getSvgHtml(editor.$(block.label).get(0)),
            attributes: { class: 'block-full-width' },
            content: block.content,
            category: {
                label: block.category,
                open: block.category === options.openCategory
            }
        });
    });
}