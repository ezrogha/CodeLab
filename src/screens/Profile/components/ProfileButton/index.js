import React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  buttonStyle: {
    width: 150,
    backgroundColor: '#FF9052',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

const ProfileButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.buttonStyle}>
      <Text style={styles.buttonText}>
        {' '}
        {title}
        {' '}
      </Text>
    </View>
  </TouchableOpacity>
);

export default ProfileButton;

ProfileButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

ProfileButton.defaultProps = {
  title: '',
  onPress: () => {},
};
