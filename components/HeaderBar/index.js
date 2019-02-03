import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import MenuButton from './MenuButton';
import HomeButton from './HomeButton';
import Title from './Title';
import { styles } from './index.styles';

class HeaderBar extends Component {
  render() {
    const { initialRouteName, scene } = this.props;
    const { title } = scene.descriptor.options;

    return (
      <Header placement="left" containerStyle={styles}>
        <MenuButton />
        <Title title={title || initialRouteName} />
        <HomeButton />
      </Header>
    )
  }
}

export default HeaderBar;
