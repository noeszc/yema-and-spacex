import React from 'react';
import { Stack, Box } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { getPath } from 'lib/utils';

// //////////////////////////////////////////////////////////////////////

const LinkWrapper = styled(Box)`
  > a {
    display: block;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: ${({ theme }) => getPath(['fontSizes.xs'], theme)};
    color: ${({ theme }) => getPath(['colors.gray.400'], theme)};
    &:hover,
    &.active {
      color: ${({ theme }) => getPath(['colors.black'], theme)};
    }
    &.active {
      text-decoration: underline;
    }
  }
`;

// //////////////////////////////////////////////////////////////////////

function Navigation(props) {
  return (
    <Stack {...{ as: 'nav', isInline: true, spacing: 4 }} {...props}>
      <LinkWrapper>
        <NavLink
          to="/"
          isActive={(_, location) =>
            /\/launches\/([1-3])$/.test(location.pathname)
          }
        >
          Launches
        </NavLink>
      </LinkWrapper>
      <LinkWrapper>
        <NavLink to="/about">About</NavLink>
      </LinkWrapper>
    </Stack>
  );
}

export default Navigation;
