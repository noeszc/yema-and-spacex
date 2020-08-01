import * as R from 'ramda';
import React from 'react';
import {
  SimpleGrid,
  Box,
  List,
  ListItem,
  Text,
  Stack,
  Skeleton,
} from '@chakra-ui/core';
import { formatToTimeZone } from 'date-fns-timezone';
import { randomInt, truncate } from 'lib/utils';

import RolloverImage from './RolloverImage';
import Title from './Title';

// //////////////////////////////////////////////////////////////////////

const getRandomImage = (item) => {
  const list = R.pathOr([''], ['links', 'flickr_images'], item);
  const offset = R.compose((n) => randomInt(0, n), R.dec, R.length);
  return R.replace(/_o\.jpg/g, '_z.jpg', R.nth(offset(list), list));
};

const getColor = R.cond([
  [R.T, R.always('green.300')],
  [R.F, R.always('red.500')],
]);

// //////////////////////////////////////////////////////////////////////

const Launch = ({ item = {}, isLoading, ...props }) => {
  const launchDate = formatToTimeZone(
    R.pathOr(new Date(), ['launch_date_utc'], item),
    'MM/DD/YYYY h:mm A',
    {
      timeZone: 'America/Mexico_City',
    },
  );

  return (
    <Box {...props}>
      <Skeleton isLoaded={!isLoading}>
        <RolloverImage
          src={getRandomImage(item)}
          href={R.pathOr('', ['links', 'wikipedia'], item)}
        ></RolloverImage>
      </Skeleton>
      <Stack shouldWrapChildren bg="white" padding={6}>
        <Skeleton height="30px" isLoaded={!isLoading}>
          <Title highlightColor={getColor(R.pathOr(['launch_success'], item))}>
            {truncate(R.pathOr('', ['mission_name'], item), 10, '-')}
          </Title>
        </Skeleton>
        <Skeleton height="18px" isLoaded={!isLoading}>
          <Text
            {...{
              fontFamily: 'mono',
              textAlign: 'right',
              fontSize: 'xs',
              fontWeight: '500',
              color: 'gray.400',
            }}
          >
            at {launchDate}
          </Text>
        </Skeleton>
      </Stack>
    </Box>
  );
};

// //////////////////////////////////////////////////////////////////////

function Launches({ launches, isLoading }) {
  return (
    <SimpleGrid
      {...{
        as: List,
        columns: [1, null, 2, 4],
        spacing: 8,
      }}
    >
      {R.map(
        (item) => (
          <Launch
            isLoading={isLoading}
            as={ListItem}
            key={`launch-${item.id}`}
            item={item}
          ></Launch>
        ),
        launches,
      )}
    </SimpleGrid>
  );
}

export default Launches;
