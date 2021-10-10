import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import AppNavigator from './components/AppNavigator';

const App = () => {
  const [appReady, setAppReady] = useState(false);

  if (!appReady) {
    return (
      <AppLoading
        startAsync={cacheResourcesAsync}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <>
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppNavigator />
          <StatusBar style="auto" />
        </ApplicationProvider>
      </SafeAreaProvider>
    </>
  );
};

async function cacheResourcesAsync() {
  const images = [
    require('./assets/images/home_screen_profiles/stephan.gif'),
    require('./assets/images/home_screen_profiles/laura.gif'),
    require('./assets/images/home_screen_profiles/momodou.gif'),
    require('./assets/images/home_screen_profiles/colin.gif'),
    require('./assets/images/variant_screen_pie_charts/stephan.png'),
    require('./assets/images/variant_screen_pie_charts/laura.png'),
    require('./assets/images/variant_screen_pie_charts/momodou.png'),
    require('./assets/images/variant_screen_pie_charts/colin.png'),
    require('./assets/images/landing_screen_icons/globe-europe-regular.png'),
    require('./assets/images/landing_screen_icons/eye-solid.png'),
    require('./assets/images/landing_screen_icons/heartbeat-solid.png'),
    require('./assets/images/landing_screen_icons/birthday-cake-regular.png'),
    require('./assets/images/landing_screen_icons/smoking-regular.png'),
  ];

  const cacheImages = images.map((image) =>
    Asset.fromModule(image).downloadAsync()
  );

  return Promise.all(cacheImages);
}

export default App;
