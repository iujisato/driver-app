import React from 'react';
import { Text } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import HeaderBar from '../components/HeaderBar';

const TestComponent = () => {
  return (
    <Text h1>CS NÃO É TRAMPO!</Text>
  )
}

const routes = {
  Test: {
    screen: TestComponent,
    navigationOptions: {
      title: 'CS',
      header: (props) => <HeaderBar { ...props } />,
    }
  }
}

const TestNavigation = createStackNavigator(routes)

export default TestNavigation;
