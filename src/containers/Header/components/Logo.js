import React from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { Heading, Link } from '@chakra-ui/core';
import styled from '@emotion/styled';

import spacex from 'images/spacex.svg';

// //////////////////////////////////////////////////////////////////////

const size = { w: '150px', h: 'auto' };

const Target = styled(Link)`
  display: block;
  background: transparent;
  text-indent: -9999999px;
  overflow: hidden;
`;

// //////////////////////////////////////////////////////////////////////

const Brand = styled(Heading)`
  display: block;
  background: url(${spacex}) no-repeat center center;
  background-size: contain;
  margin: 0;
`;

// //////////////////////////////////////////////////////////////////////

function Logo(props) {
  return (
    <Brand as={'h1'} {...size} {...props}>
      <Target as={ReachLink} to="/" {...size}>
        Space X
      </Target>
    </Brand>
  );
}

export default Logo;
