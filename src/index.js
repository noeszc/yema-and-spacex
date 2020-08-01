import React from 'react';
import ReactDom from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import FontFaceObserver from 'fontfaceobserver';

// Import root app
import App from 'containers/App';
import createClient from './lib/apollo';
import theme from './lib/theme';

// Observe loading of Barlow font
const barlowObserver = new FontFaceObserver('Barlow', {});

// When Barlow is loaded, add a font-family using Barlow to the body
barlowObserver.load().then(() => {
  document.body.classList.add('font--loaded');
});

// Create apollo client
const client = createClient();
const MOUNT_NODE = document.getElementById('app');

const ConnectedApp = () => (
  <ApolloProvider client={client}>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <App></App>
        <CSSReset></CSSReset>
      </ThemeProvider>
    </HelmetProvider>
  </ApolloProvider>
);

ReactDom.render(<ConnectedApp />, MOUNT_NODE);
