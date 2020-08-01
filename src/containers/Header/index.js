import React from 'react';
import { Box } from '@chakra-ui/core';

import Container from 'components/elements/Container';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

function Header(params) {
  return (
    <Box
      {...{
        as: 'header',
        bg: 'white',
        position: 'fixed',
        width: '100%',
        zIndex: 2,
      }}
    >
      <Container
        {...{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 12,
        }}
      >
        <Logo></Logo>
        <Navigation></Navigation>
      </Container>
    </Box>
  );
}

export default Header;
