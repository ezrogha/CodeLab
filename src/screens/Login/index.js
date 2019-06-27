import React, { Component } from 'react';
import {
  Text, View, Image, TouchableOpacity, StyleSheet, AsyncStorage,
} from 'react-native';
import { Input } from 'react-native-elements';
import login from '../../githubLogin';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    color: '#F57F17',
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: 300,
    marginTop: 10,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F57F17',
    padding: 15,
    width: 280,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default class Login extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  state = {
    email: '',
    password: '',
    error: '',
  };

  onChangeEmail = (value) => {
    this.setState({ email: value });
  };

  onChangePassword = (value) => {
    this.setState({ password: value });
  };

  onSubmit = () => {
    this.setState({ error: '' });
    const { email, password } = this.state;
    const { navigation } = this.props;
    login(email, password)
      .then((token) => {
        navigation.navigate('Home');
        AsyncStorage.setItem('token', token);
      })
      .catch(() => this.setState({ error: 'Invalid Credentials' }));
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <View style={styles.container}>
        <Image source={require('../../../assets/icon2.png')} style={styles.Image} />
        <Text style={styles.logoText}>CodeLab</Text>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={this.onChangeEmail}
            name="email"
            value={email}
            placeholder="Email"
            autoCapitalize="none"
            containerStyle={styles.input}
          />
          <Input
            onChangeText={this.onChangePassword}
            secureTextEntry
            name="password"
            value={password}
            placeholder="Password"
            containerStyle={styles.input}
          />
          {error === '' ? <Text /> : <Text style={styles.errorText}>{error}</Text>}
          <TouchableOpacity onPress={this.onSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
