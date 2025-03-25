import {
    studentQuote,
    studentQuoteIcon
} from './html/quote';

const getSvgHtml = (svg) => {
    if (typeof window === 'undefined') return ''
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
    return svg.outerHTML
}

const quoteBlocks = [
    {
        id: 'quote-student',
        label: studentQuoteIcon,
        content: studentQuote,
        category: 'Content'
    }
];

export default (editor, options = {}) => {
    const bm = editor.BlockManager;

    quoteBlocks.forEach(block => {
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