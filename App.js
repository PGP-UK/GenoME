import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import AppNavigator from "./src/components/AppNavigator";
import { DataProvider } from './src/Context/DataContext';

const App = () => (
  <SafeAreaProvider>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <DataProvider>
        <AppNavigator />
      </DataProvider>
      <StatusBar style="auto" />
    </ApplicationProvider>
  </SafeAreaProvider>
);

export default App;
