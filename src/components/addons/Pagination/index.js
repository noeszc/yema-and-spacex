import React, { useEffect } from 'react';
import { useCounter } from 'react-use';
import * as R from 'ramda';
import { createPaginationItems } from './helpers';
import { Stack, Button } from '@chakra-ui/core';
import { mapIndexed } from 'lib/utils';

// //////////////////////////////////////////////////////////////////////

const getButtonProps = (props) => {
  const base = {
    borderRadius: 0,
    fontWeight: '500',
    padding: 6,
  };

  const on = {
    ...base,
    bg: 'black',
    color: 'white',
    _hover: { bg: 'gray.900' },
  };

  const off = {
    ...base,
    bg: 'white',
    color: 'black',
    _hover: { bg: 'gray.100' },
  };

  return R.cond([
    [R.whereEq({ active: true, type: 'pageItem' }), R.always(on)],
    [R.whereEq({ active: false, type: 'nextItem' }), R.always(on)],
    [R.whereEq({ active: false, type: 'pageItem' }), R.always(off)],
    [R.T, R.always({})],
  ])(props);
};

// //////////////////////////////////////////////////////////////////////

export default function Pagination({
  activePage: defaultActivePage,
  totalPages,
  onPageChange,
  ...props
}) {
  const [activePage, { set }] = useCounter(+defaultActivePage);

  useEffect(() => {
    onPageChange(activePage);
  }, [activePage]);

  const handleItemClick = (e, { value: nextActivePage }) => {
    if (+activePage === +nextActivePage) return;
    set(nextActivePage);
  };

  const items = createPaginationItems({ activePage, totalPages });

  const buttons = R.dropLast(1, R.tail(items));
  const next = R.last(items);
  // const first = head(items);

  return (
    <Stack isInline justifyContent="space-between" {...props}>
      <Stack isInline spacing={'1px'}>
        {mapIndexed(
          (item, index) => (
            <Button
              key={`${item.type}-${index}`}
              onClick={(e) => handleItemClick(e, item)}
              {...getButtonProps(item)}
            >
              {item.value}
            </Button>
          ),
          buttons,
        )}
      </Stack>
      <Button
        {...getButtonProps(next)}
        onClick={(e) => handleItemClick(e, next)}
      >
        Show me more
      </Button>
    </Stack>
  );
}
