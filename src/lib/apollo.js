import { InMemoryCache, ApolloClient, HttpLink } from '@apollo/client';

export default function createClient() {
  const cache = new InMemoryCache();

  const httpLink = new HttpLink({
    credentials: 'same-origin',
    uri: process.env.REACT_APP_GRAPHQL_API_URL,
  });

  return new ApolloClient({ cache, link: httpLink });
}
