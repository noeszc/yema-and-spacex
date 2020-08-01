import React from 'react';
import { Box, IconButton, Link } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { getPath } from 'lib/utils';

// //////////////////////////////////////////////////////////////////////

const transition = 'all 0.3s ease-in-out';

const OverImage = styled(Box)`
  position: relative;
  background: ${({ theme }) => getPath(['colors.gray.300'], theme)};
  transition: ${transition};
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ theme }) => getPath(['colors.gray.600'], theme)};
    opacity: 0;
    z-index: 0;
    transition: ${transition};
  }
  &:hover {
    &:after {
      opacity: 1;
    }
    .box-photo {
      opacity: 0.5;
      transform: scale(1.05);
    }
    span {
      opacity: 1;
      visibility: visible;
    }
  }
`;

// //////////////////////////////////////////////////////////////////////

const ExternalLink = ({ href, ...props }) => {
  return (
    <Box
      {...{
        as: 'span',
        bottom: 6,
        opacity: 0,
        pos: 'absolute',
        right: 6,
        visibility: 'hidden',
        zIndex: 3,
      }}
      {...props}
    >
      <IconButton
        {...{
          border: '1px solid rgba(255,255,255,0.5)',
          borderRadius: '50%',
          color: 'white',
          display: 'inline-flex',
          height: '35px',
          minW: 'inherit',
          width: '35px',
        }}
        {...{
          as: Link,
          href,
          icon: 'external_link',
          target: '_blank',
          variant: 'unstyled',
        }}
      ></IconButton>
    </Box>
  );
};

// //////////////////////////////////////////////////////////////////////

function RolloverImage({ src, href }) {
  return (
    <Box>
      <OverImage>
        <Box
          {...{
            pos: 'relative',
            overflow: 'hidden',
            zIndex: 1,
            height: '240px',
          }}
        >
          <Box
            {...{
              role: 'img',
              className: 'box-photo',
              background: `url(${src}) center center no-repeat`,
              backgroundSize: 'cover',
              height: '100%',
              transition,
              transform: 'translateZ(0)',
            }}
          ></Box>
        </Box>
        {href && <ExternalLink href={href}></ExternalLink>}
      </OverImage>
    </Box>
  );
}

export default RolloverImage;
