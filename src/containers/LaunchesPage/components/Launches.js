import React from 'react';
import { SimpleGrid, Box, List, ListItem } from '@chakra-ui/core';
import { map, isEmpty } from 'ramda';

// //////////////////////////////////////////////////////////////////////

const Launch = ({ item, ...props }) => {
  return <Box {...props}>{item.mission_name}</Box>;
};

// //////////////////////////////////////////////////////////////////////

function Launches({ launches }) {
  if (isEmpty(launches)) return null;

  return (
    <SimpleGrid
      {...{
        as: List,
        columns: [1, null, 2, 4],
      }}
    >
      {map(
        (item) => (
          <Launch as={ListItem} key={`launch-${item.id}`} item={item}></Launch>
        ),
        launches,
      )}
    </SimpleGrid>
  );
}

export default Launches;
