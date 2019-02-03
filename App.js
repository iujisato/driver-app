import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './App.styles';
import { createStackNavigator, createAppContainer  } from 'react-navigation';
import { routes, options } from './routes';

const AppNavigator = createStackNavigator(routes, options);
const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
