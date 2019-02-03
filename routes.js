import React from 'react';
import HomeScreen from './components/Home/index';
import HeaderBar from './components/HeaderBar';

export const routes = {
  Home: HomeScreen,
}

export const options = {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: props => <HeaderBar {...props} />
  },
}

