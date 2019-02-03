import React, { Component } from 'react';
import { Header } from 'react-native-elements';

class HeaderBar extends Component {
  render() {
    return (
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
    )
  }
}

export default HeaderBar;
