import React from 'react';
import HomeScreen from '../components/Home/index';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import HomeNavigation from './Home';
import TestNavigation from './Test';
import AuthenticationNavigation from './Authentication';

// Set app navigation schema
const drawerRoutes = {
  Home: {
    screen: HomeNavigation,
    navigationOptions: {
      title: 'Home',
    }
  },
  About: {
    screen: TestNavigation,
    navigationOptions: {
      title: 'CS',
    }
  },
}

const DrawerNavigator = createDrawerNavigator(drawerRoutes);

const stackRoutes = {
  Main: {
    screen: DrawerNavigator,
  },
  Authentication: {
    screen: AuthenticationNavigation,
  }
};

const rootContainerOptions = {
  initialRouteName: 'Authentication',
  defaultNavigationOptions: {
    header: null,
  },
}

const RootContainer = createStackNavigator(stackRoutes, rootContainerOptions)

export default RootContainer;
