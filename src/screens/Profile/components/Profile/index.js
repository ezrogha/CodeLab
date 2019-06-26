import React from 'react';
import {
  View, Image, StyleSheet, Dimensions, ImageBackground, Platform,
} from 'react-native';
import PropTypes from 'prop-types';

import BackgroundImageAnd from '../../../../../assets/codeLab_bg.png';
import BackgroundImageIos from '../../../../../assets/codeLab_bg2.png';

const screenWidth = Dimensions.get('window').width;
const imagePortion = screenWidth * (60 / 100);

const styles = StyleSheet.create({
  ImageContainer: {
    width: imagePortion,
    height: imagePortion,
    borderRadius: imagePortion / 2,
    marginTop: 10,
    marginLeft: screenWidth * (10 / 100),
    marginRight: screenWidth * (10 / 100),
  },
  Image: {
    flex: 1,
  },
});

const ProfileImage = ({ url }) => (
  <ImageBackground
    source={Platform.OS === 'ios' ? BackgroundImageIos : BackgroundImageAnd}
    style={{
      backgroundColor: '#F7DBC0',
      paddingBottom: Platform.OS === 'ios' ? 50 : 20,
      paddingTop: Platform.OS === 'ios' ? 40 : 10,
    }}
  >
    <View style={styles.ImageContainer}>
      <Image source={{ uri: url }} style={styles.ImageContainer} />
    </View>
  </ImageBackground>
);

export default ProfileImage;

ProfileImage.propTypes = {
  url: PropTypes.string,
};

ProfileImage.defaultProps = {
  url: '',
};
