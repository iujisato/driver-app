import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './App.styles';
import { createAppContainer  } from 'react-navigation';
import AppNavigator from './navigations';

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
