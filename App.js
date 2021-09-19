import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppNavigator from './components/AppNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
      <StatusBar style='auto' />
    </SafeAreaProvider>
  );
};

export default App;
