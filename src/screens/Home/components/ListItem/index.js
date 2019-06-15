import React from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';

const styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    paddingTop: 16,
    marginRight: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  ItemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  nameStyle: {
    fontWeight: 'bold',
  },
});

const ListItem = ({
  devData: {
    item: {
      node: {
        name, login, avatarUrl, repositories, starredRepositories, url, bio,
      },
    },
  },
  navigate,
}) => {
  const data = {
    username: login,
    fullName: name,
    image: avatarUrl,
    repoCount: repositories.totalCount,
    starredCount: starredRepositories.totalCount,
    url,
    bio,
  };
  return (
    <TouchableOpacity onPress={() => navigate('Profile', data)}>
      <View style={styles.ItemContainer}>
        <Avatar source={avatarUrl} />
        <View style={styles.itemStyle}>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text>{login}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

ListItem.propTypes = {
  devData: PropTypes.shape({
    item: PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string,
        login: PropTypes.string,
        avatarUrl: PropTypes.string,
        repositories: PropTypes.object,
        starredRepositories: PropTypes.object,
        url: PropTypes.string,
        bio: PropTypes.string,
      }),
    }),
  }),
  navigate: PropTypes.func,
};

ListItem.defaultProps = {
  devData: {
    item: {
      node: {
        name: '',
        login: '',
        avatarUrl: '',
        repositories: {},
        starredRepositories: {},
        url: '',
        bio: '',
      },
    },
  },
  navigate: () => {},
};
