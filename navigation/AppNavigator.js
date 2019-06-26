import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../src/screens/Home';
import ProfileScreen from '../src/screens/Profile';
import WebViewScreen from '../src/screens/WebView/index';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    WebView: {
      screen: WebViewScreen,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#F57F17',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);
