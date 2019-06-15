import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableOpacity, SafeAreaView,
} from 'react-native';
import { Constants } from 'expo';
import { Header, Icon, SearchBar } from 'react-native-elements';

import List from './components/List';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  searchButton: {
    marginRight: 20,
  },
});

export class Home extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  state = {
    searchText: '',
    showSearchBar: false,
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  };

  componentDidMount() {

  }

  updateSearchText = (event) => {
    this.setState({
      searchText: event,
    });
  };

  render() {
    const { showSearchBar, searchText, items } = this.state;
    const { navigation: { navigate } } = this.props;
    return (
      <View style={styles.homeContainer}>
        {showSearchBar ? (
          <View style={{ flexDirection: 'row' }}>
            <SearchBar
              value={searchText}
              onChange={this.updateSearchText}
              placeholder="Type Here..."
              containerStyle={{
                paddingTop: Constants.statusBarHeight,
                backgroundColor: '#F57F17',
                flex: 90,
              }}
              inputContainerStyle={{
                backgroundColor: 'transparent',
                borderColor: '#000',
                borderLeftWidth: 1,
                borderRightWidth: 1,
              }}
              inputStyle={{ color: '#fff' }}
              placeholderTextColor="#fff"
              autoFocus
              round
            />
            <View
              style={{
                flex: 10,
                backgroundColor: '#F57F17',
                paddingTop: Constants.statusBarHeight,
              }}
            >
              <TouchableOpacity onPress={() => this.setState({ showSearchBar: false })}>
                <Icon
                  name="close"
                  color="white"
                  containerStyle={{ marginTop: 10, marginRight: 5 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <Header
            containerStyle={{ backgroundColor: '#F57F17' }}
            centerComponent={{
              text: 'CodeLab',
              style: { fontWeight: 'bold', color: '#fff', fontSize: 18 },
            }}
            rightComponent={(
              <TouchableOpacity onPress={() => this.setState({ showSearchBar: true })}>
                <Icon name="search" color="#fff" />
              </TouchableOpacity>
)}
          />
        )}
        <SafeAreaView style={{ flex: 1 }}>
          <List items={items} navigate={navigate} />
        </SafeAreaView>
      </View>
    );
  }
}

export default Home;
