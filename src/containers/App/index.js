import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Flex } from '@chakra-ui/core';
import { Helmet } from 'react-helmet-async';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';

import NotFoundPage from 'containers/NotFoundPage';
import HomePage from 'containers/HomePage';

const AppWrapper = styled(Flex)`
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
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
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
}

export default App;
