import React from 'react'
import ReactDom from 'react-dom'
import createClient from './lib/apollo'
import { ApolloProvider } from '@apollo/client'

// Create apollo client
const client = createClient()
const MOUNT_NODE = document.getElementById('app')

const ConnectedApp = () => (
  <ApolloProvider client={client}>

  </ApolloProvider>
)

ReactDom.render(<ConnectedApp />, MOUNT_NODE)
