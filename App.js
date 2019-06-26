import React from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { EMAIL, PASSWORD } from 'react-native-dotenv';

import AppNavigator from './navigation/AppNavigator';
import login from './src/githubLogin';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = token => setContext(() => ({
  headers: {
    authorization: token ? `Bearer ${token}` : '',
  },
}));

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentDidMount() {
    login(EMAIL, PASSWORD).then((token) => {
      this.setState({ token });
    });
  }

  cacheResourceAsync = async () => {
    const images = [];

    const cacheImages = images.map(image => Asset.fromModule(image).downloadAsync());
    return Promise.all(cacheImages);
  };

  render() {
    const { token } = this.state;
    let client = null;
    if (token) {
      client = new ApolloClient({
        link: authLink(token).concat(httpLink),
        cache: new InMemoryCache(),
      });

      const { isLoadingComplete } = this.state;
      if (!isLoadingComplete) {
        return (
          <AppLoading
            startAsync={this.cacheResourceAsync}
            onFinish={() => this.setState({ isLoadingComplete: true })}
            onError={error => console.log(error)}
          />
        );
      }
      return (
        <ApolloProvider client={client}>
          <AppNavigator />
        </ApolloProvider>
      );
    }
    return null;
  }
}
