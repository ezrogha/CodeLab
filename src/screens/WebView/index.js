import React from 'react';
import { WebView } from 'react-native';

import PropTypes from 'prop-types';

const GitView = ({
  navigation: {
    state: {
      params: { url },
    },
  },
}) => <WebView source={{ uri: url }} startInLoadingState />;

export default GitView;

GitView.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.objectOf(PropTypes.any),
    }),
  }),
};

GitView.defaultProps = {
  navigation: {
    state: {
      params: {},
    },
  },
};
