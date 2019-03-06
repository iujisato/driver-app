import React from 'react';
import LoginScreen from '../components/Login';
import { createStackNavigator } from 'react-navigation';

const routes = {
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
      header: null,
    }
  }
}

const LoginNavigation = createStackNavigator(routes)

export default LoginNavigation;
