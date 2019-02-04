import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import MenuButton from './MenuButton';
import HomeButton from './HomeButton';
import Title from './Title';
import { styles } from './index.styles';

class HeaderBar extends Component {
  render() {
    const { navigation, initialRouteName, scene } = this.props;
    const { title } = scene.descriptor.options;

    return (
      <Header placement="left" containerStyle={styles}>
        <MenuButton navigation={ navigation }/>
        <Title title={title || initialRouteName} />
        <HomeButton navigation={ navigation }/>
      </Header>
    )
  }
}

export default HeaderBar;
