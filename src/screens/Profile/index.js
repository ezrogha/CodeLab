import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import ProfileImage from './components/Profile';
import UserInfo from './components/UserInfo';

const Profile = ({
  navigation: {
    navigate,
    state: {
      params: {
        image, url, username, fullName, repoCount, starredCount, bio,
      },
    },
  },
}) => (
  <ScrollView style={styles.profileContainer}>
    <ProfileImage url={image} />
    <UserInfo
      navigate={navigate}
      data={{
        url,
        username,
        fullName,
        repoCount,
        starredCount,
        bio,
      }}
    />
  </ScrollView>
);
export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
});

Profile.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        url: PropTypes.string,
        username: PropTypes.string,
        fullName: PropTypes.string,
        repoCount: PropTypes.number,
        starredCount: PropTypes.number,
        bio: PropTypes.string,
      }),
    }),
  }).isRequired,
};
