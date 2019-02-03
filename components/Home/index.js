import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Página inicial'
  }

  render() {
    return (
      <View>
        <Text h1>Bora trabalhar Yoshio!</Text>
      </View>
    )
  }
}

export default HomeScreen;
