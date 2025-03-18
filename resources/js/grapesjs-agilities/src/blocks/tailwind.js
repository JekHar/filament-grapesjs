import {
  oneColumn,
  twoColumns,
  threeColumns,
  fourColumns,
  twoThirdsOneThird,
  oneThirdTwoThirds,
  gridLayout,
  asymmetricGrid,
  zPattern,
  oneColumnIcon,
  twoColumnsIcon,
  threeColumnsIcon,
  fourColumnsIcon,
  twoThirdsOneThirdIcon,
  oneThirdTwoThirdsIcon,
  gridLayoutIcon,
  asymmetricGridIcon,
  zPatternIcon
} from './html/columns';

import {
  greeting,
  greetingIcon
} from './html/greeting';

const getSvgHtml = (svg) => {
  if (typeof window === 'undefined') return ''
  svg.setAttribute('width', '100%')
  svg.setAttribute('height', '100%')
  return svg.outerHTML
}

const columnBlocks = [
  {
    id: 'column-one-column',
    label: oneColumnIcon,
    content: oneColumn,
    category: 'Layout'
  },
  {
    id: 'column-two-columns',
    label: twoColumnsIcon,
    content: twoColumns,
    category: 'Layout'
  },
  {
    id: 'column-three-columns',
    label: threeColumnsIcon,
    content: threeColumns,
    category: 'Layout'
  },
  {
    id: 'column-four-columns',
    label: fourColumnsIcon,
    content: fourColumns,
    category: 'Layout'
  },
  {
    id: 'column-two-thirds-one-third',
    label: twoThirdsOneThirdIcon,
    content: twoThirdsOneThird,
    category: 'Layout'
  },
  {
    id: 'column-one-third-two-thirds',
    label: oneThirdTwoThirdsIcon,
    content: oneThirdTwoThirds,
    category: 'Layout'
  },
  {
    id: 'column-grid',
    label: gridLayoutIcon,
    content: gridLayout,
    category: 'Layout'
  },
  {
    id: 'column-asymmetric-grid',
    label: asymmetricGridIcon,
    content: asymmetricGrid,
    category: 'Layout'
  },
  {
    id: 'column-z-pattern',
    label: zPatternIcon,
    content: zPattern,
    category: 'Layout'
  }
];

const greetingBlocks = [
  {
    id: 'header-greeting',
    label: greetingIcon,
    content: greeting,
    category: 'Headers'
  }
];

export default (editor, options = {}) => {
  const bm = editor.Blocks;

  columnBlocks.forEach(block => {
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

  greetingBlocks.forEach(block => {
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
