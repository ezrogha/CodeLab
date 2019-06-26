import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  statStyles: {
    width: 150,
    borderWidth: 2,
    borderColor: '#FF9052',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  num: {
    color: '#FF9052',
    fontSize: 22,
    fontWeight: 'bold',
  },
  name: {
    color: '#FF9052',
    fontSize: 16,
  },
});

const StatsView = ({ amount, section }) => (
  <View style={styles.statStyles}>
    <Text style={styles.num}>{amount}</Text>
    <Text style={styles.name}>{section}</Text>
  </View>
);

export default StatsView;

StatsView.propTypes = {
  amount: PropTypes.number,
  section: PropTypes.string,
};

StatsView.defaultProps = {
  amount: 0,
  section: '',
};
