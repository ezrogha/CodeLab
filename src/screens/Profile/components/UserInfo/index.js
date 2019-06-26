import React from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import StatsView from '../StatsView';
import ProfileButton from '../ProfileButton';

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 26,
  },
  usernameStyle: {
    color: '#F57F17',
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  bio: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#8492A6',
  },
  bioText: {
    fontSize: 18,
    color: '#8492A6',
    textAlign: 'center',
  },
  userRecords: {
    flexDirection: 'row',
    marginTop: 20,
  },
  UserRecordsBottom: {
    paddingBottom: 20,
  },
});

const UserInfo = ({ navigate, data }) => (
  <View style={styles.infoContainer}>
    <Text style={styles.nameStyle}>
      {data.fullName}
      {' '}
      <Text style={styles.usernameStyle}>
        @
        {data.username}
      </Text>
    </Text>
    <View style={styles.bio}>
      <Text style={styles.bioText}>{data.bio}</Text>
    </View>
    <View style={styles.userRecords}>
      <StatsView amount={data.repoCount} section="Respositories" />
      <StatsView amount={data.starredCount} section="Starred" />
    </View>
    <View style={{ ...styles.userRecords, paddingBottom: 20 }}>
      <ProfileButton
        title="GitHub"
        navigate={navigate}
        onPress={() => navigate('WebView', { url: data.url })}
      />
      <ProfileButton title="SHARE" />
    </View>
  </View>
);

export default UserInfo;

UserInfo.propTypes = {
  navigate: PropTypes.func,
  data: PropTypes.objectOf(PropTypes.any),
};

UserInfo.defaultProps = {
  navigate: () => {},
  data: {},
};
