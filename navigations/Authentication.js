import React from 'react';
import LoginScreen from '../components/Authentication/Login';
import SignupScreen from '../components/Authentication/Signup';
import { createStackNavigator } from 'react-navigation';

const routes = {
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
      header: null,
    }
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: 'Signup',
      header: null,
    }
  }
}

const AuthenticationNavigation = createStackNavigator(routes)

export default AuthenticationNavigation;
