import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  imageContainer: {
    margin: 16,
    width: 40,
    height: 40,
  },
  imageStyle: {
    borderRadius: 20,
    width: 40,
    height: 40,
  },
});

const Avatar = ({ source }) => (
  <View style={styles.imageContainer}>
    <Image source={{ uri: source }} style={styles.imageStyle} />
  </View>
);

export default Avatar;
