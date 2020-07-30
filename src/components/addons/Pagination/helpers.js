import * as R from 'ramda';

// //////////////////////////////////////////////////////////////////////

const createRange = (start, end, pageFactory) =>
  R.map(pageFactory, R.range(start, end + 1));

const createPageFactory = (activePage) => (pageNumber) => ({
  active: activePage === pageNumber,
  type: 'pageItem',
  value: pageNumber,
});

const typeSafeOptions = ({ activePage, totalPages }) => ({
  activePage: +activePage,
  totalPages: +totalPages,
});

const createNextItem = (activePage, totalPages) => ({
  active: false,
  type: 'nextItem',
  value: Math.min(activePage + 1, totalPages),
});

const createPrevItem = (activePage) => ({
  active: activePage,
  type: 'prevItem',
  value: Math.max(1, activePage - 1),
});

// //////////////////////////////////////////////////////////////////////

export const createPaginationItems = (rawOptions) => {
  const options = typeSafeOptions(rawOptions);
  const { activePage, totalPages } = options;

  const pageFactory = createPageFactory(activePage);
  const range = createRange(1, totalPages, pageFactory);

  return [
    createPrevItem(activePage),
    ...range,
    createNextItem(activePage, totalPages),
  ];
};
