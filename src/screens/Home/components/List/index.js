import React from 'react';
import {
  View, FlatList, StyleSheet, Text, ActivityIndicator,
} from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ListItem from '../ListItem';

const styles = StyleSheet.create({
  ListContainer: {
    marginBottom: 8,
  },
});

const GET_DEVS = gql`
  query {
    search(query: "location:lagos language:javascript", type: USER, first: 20) {
      repositoryCount
      wikiCount
      edges {
        node {
          ... on User {
            id
            name
            bio
            url
            login
            avatarUrl
            repositories {
              totalCount
            }
            starredRepositories {
              totalCount
            }
          }
        }
      }
    }
  }
`;

const List = ({ navigate }) => (
  <Query query={GET_DEVS}>
    {({ loading, error, data }) => {
      if (loading) return <View style={{ marginTop: 20 }}><ActivityIndicator size="large" color="gray" /></View>;
      if (error) {
        return (
          <Text>
            Error!
            {error.message}
          </Text>
        );
      }
      return (
        <View style={styles.ListContainer}>
          <FlatList
            keyExtractor={item => item.node.id}
            data={data.search.edges}
            renderItem={item => <ListItem key={item.index} devData={item} navigate={navigate} />}
          />
        </View>
      );
    }}
  </Query>
);

export default List;
