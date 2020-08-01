import React from 'react';
import { Stack, Skeleton, List, ListItem, Link } from '@chakra-ui/core';
import * as R from 'ramda';
function Footer({ isLoaded, links = {} }) {
  return (
    <Skeleton isLoaded={isLoaded}>
      <Stack
        {...{
          as: List,
          fontFamily: 'mono',
          fontSize: 'sm',
          isInline: true,
          justify: { base: 'left', lg: 'right' },
          paddingX: 4,
          paddingY: 12,
        }}
      >
        {!R.isEmpty(links) &&
          R.compose(
            R.map((key) => (
              <ListItem key={`link-${key}`}>
                <Link
                  {...{
                    href: links[key],
                    textDecoration: 'underline',
                    target: '_blank',
                  }}
                >
                  {key}
                </Link>
              </ListItem>
            )),
            R.keys,
          )(links)}
      </Stack>
    </Skeleton>
  );
}

export default Footer;
