import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Flex } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';

import NotFoundPage from 'containers/NotFoundPage';
import LaunchesPage from 'containers/LaunchesPage';
import Container from 'components/elements/Container';
import ScrollToTop from 'components/behaviors/ScrollToTop';
import AboutPage from 'containers/AboutPage';
import { getPath } from 'lib/utils';

const AppWrapper = styled(Flex)`
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => getPath(['colors.gray.50'], theme)};
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Yema &#38; SpaceX"
          defaultTitle="Yema &#38; SpaceX"
        >
          <meta name="description" content="Coding challenge for Yema.mx" />
        </Helmet>
        <Global
          styles={{
            'body.font--loaded': {
              fontFamily: `'Barlow', sans-serif;`,
            },
          }}
        ></Global>
        <ScrollToTop></ScrollToTop>
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/launches/1"></Redirect>}
            ></Route>
            <Route
              path="/launches/:page([1-3])"
              component={LaunchesPage}
            ></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </Container>
      </AppWrapper>
    </Router>
  );
}

export default App;
