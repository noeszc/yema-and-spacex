import React from 'react';
import ReactDom from 'react-dom';
import createClient from './lib/apollo';
import { ApolloProvider } from '@apollo/client';
import App from 'containers/App';

// Create apollo client
const client = createClient();
const MOUNT_NODE = document.getElementById('app');

const ConnectedApp = () => (
  <ApolloProvider client={client}>
    <App></App>
  </ApolloProvider>
);

ReactDom.render(<ConnectedApp />, MOUNT_NODE);
