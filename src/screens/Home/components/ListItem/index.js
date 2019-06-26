import React from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';

import Avatar from '../Avatar';

const styles = StyleSheet.create({
  itemStyle: {
    // height: 88,
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

const ListItem = ({ devData: { item: { node: { name, login, avatarUrl } } }, navigate }) => (
  <TouchableOpacity>
    <View style={styles.ItemContainer}>
      <Avatar source={avatarUrl} />
      <View style={styles.itemStyle}>
        <Text style={styles.nameStyle}>{name}</Text>
        <Text>
          {login}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default ListItem;
