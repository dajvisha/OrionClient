import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createUploadLink } from 'apollo-upload-client'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, defaultDataIdFromObject } from 'apollo-boost';

import App from '../components/App';
import Home from '../components/Home';
import Feed from '../components/Feed';
import Profile from '../components/Profile';

const cache = new InMemoryCache({
  dataIdFromObject: object => {
    switch (object.__typename) {
      case 'foo': return object.key; // use `key` as the primary key
      case 'bar': return `bar:${object.blah}`; // use `bar` prefix and `blah` as the primary key
      default: return defaultDataIdFromObject(object); // fall back to default handling
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache().restore(cache),
  link: createUploadLink({ uri: "http://localhost:8000/api/graphql" })
});

const AppRoutes = () => <ApolloProvider client={client}><App>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/feed" component={Feed} />
    <Route path="/profile/:username" component={Profile} />
  </Switch>
</App></ApolloProvider>

export default AppRoutes;
