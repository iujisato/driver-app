import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HeaderBar from '../components/HeaderBar';

const TestComponent = () => {
  return (
    <Text>Test Component</Text>
  )
}

const routes = {
  Test: {
    screen: TestComponent,
    navigationOptions: {
      title: 'Test navigation',
      header: (props) => <HeaderBar { ...props } />,
    }
  }
}

const TestNavigation = createStackNavigator(routes)

export default TestNavigation;
