import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery, gql } from '@apollo/client';
import { pick, propOr, dissocPath } from 'ramda';
import { Box, Image, AspectRatioBox, Skeleton } from '@chakra-ui/core';
import Hero from './components/Hero';
import Footer from './components/Footer';

// //////////////////////////////////////////////////////////////////////

const GET_ABOUT_COMPANY = gql`
  {
    company {
      name
      summary
      links {
        flickr
        twitter
        website
      }
    }
  }
`;

// //////////////////////////////////////////////////////////////////////

function AboutPage() {
  const { data, loading } = useQuery(GET_ABOUT_COMPANY);
  const isLoaded = !loading;
  const aboutProps = propOr({}, ['company'], data);

  return (
    <Box bg="white">
      <Helmet>
        <title>About</title>
        <meta name="description" content="About SpaceX" />
      </Helmet>
      <Hero
        {...{
          isLoaded,
          ...pick(['name', 'summary'], aboutProps),
        }}
      ></Hero>
      <Skeleton isLoaded={isLoaded}>
        <AspectRatioBox ratio={16 / 9}>
          <Image
            marginX="auto"
            src="https://farm5.staticflickr.com/4887/31180979107_da6a935c20_b.jpg"
            objectFit="cover"
          ></Image>
        </AspectRatioBox>
      </Skeleton>
      <Footer
        {...{
          isLoaded,
          ...dissocPath(['links', '__typename'], pick(['links'], aboutProps)),
        }}
      ></Footer>
    </Box>
  );
}

export default AboutPage;
