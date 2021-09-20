import React from 'react';
import { StatusBar } from 'expo-status-bar';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import AppNavigator from './components/AppNavigator';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator />
        <StatusBar style='auto' />
      </ApplicationProvider>
    </>
  );
};

export default App;
