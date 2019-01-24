import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    loading: false,
    username: '',
  };

  async componentDidMount() {
    const { navigation } = this.props;

    this.setState({ loading: true });

    const user = await AsyncStorage.getItem('@Githuber:username');

    if (!user) {
      this.setState({ loading: false });
    }

    if (user) {
      setTimeout(() => navigation.navigate('Repositories'), 2000);
    }
  }

  componentWillUnmount() {
    this.setState({ loading: false });
  }

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);

      await this.saveUser(username);

      navigation.navigate('Repositories');
    } catch (err) {
      console.log('User not Found!');
    }
  };

  render() {
    const { username, loading } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>Bem-vindo</Text>

        <Text style={styles.text}>
          Para continuar, precisamos que você informe seu usuário do Github
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Informe seu usuário"
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ username: text })}
            value={username}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;
