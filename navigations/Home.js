import React from 'react';
import HomeScreen from '../components/Home';
import { createStackNavigator } from 'react-navigation';
import HeaderBar from '../components/HeaderBar';

const routes = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      header: (props) => <HeaderBar { ...props } />,
    }
  },
}

const HomeNavigation = createStackNavigator(routes)

export default HomeNavigation;
