import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRoutes from './routes';

const client = new ApolloClient({
  link: new HttpLink({ uri: '"http://localhost:8000/api/graphql' }),
  cache: new InMemoryCache()
});

ReactDOM.render(<ApolloProvider client={client}>
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter></ApolloProvider>, document.getElementById('root'));
