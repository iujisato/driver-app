import React from 'react';
import HomeScreen from '../components/Home/index';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeNavigation from './Home';
import TestNavigation from './Test';

// Set app navigation schema
const drawerRoutes = {
  Home: {
    screen: HomeNavigation,
    navigationOptions: {
      title: 'Home drawer',
    }
  },
  About: {
    screen: TestNavigation,
    navigationOptions: {
      title: 'Test drawer',
    }
  },
}

const DrawerNavigator = createDrawerNavigator(drawerRoutes);

const stackRoutes = {
  Main: {
    screen: DrawerNavigator,
  },
  Login: {
    screen: LoginNavigation,
  }
};

const rootContainerOptions = {
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    header: null,
  },
}

const RootContainer = createStackNavigator(stackRoutes, rootContainerOptions)

export default RootContainer;
