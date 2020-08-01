import React from 'react';
import { Box, Skeleton, Heading, Text } from '@chakra-ui/core';

function Hero({ isLoaded, name, summary }) {
  return (
    <Box paddingX={4} paddingY={12} textAlign={{ base: 'left', lg: 'center' }}>
      <Skeleton isLoaded={isLoaded}>
        <Heading mb={4}>{name}</Heading>
      </Skeleton>
      <Skeleton isLoaded={isLoaded}>
        <Text fontSize="sm" fontFamily="mono">
          {summary}
        </Text>
      </Skeleton>
    </Box>
  );
}

export default Hero;
