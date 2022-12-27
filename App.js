import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useAssets } from 'expo-asset';

import AppNavigator from './src/components/AppNavigator';
import { DataProvider } from './src/Context/DataContext';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appReady, setAppReady] = useState(false);
  const [assets, assetsError] = useAssets(importantImages);
  const [allAssets, allAssetsError] = useAssets(allImages);

  useEffect(() => {
    if (assets === undefined) {
      console.log('App Not Ready');
    } else if (assetsError != undefined) {
      console.log('Caching Failed - Continuing anyway');
      setAppReady(true);
    } else if (assets !== undefined && allAssets === undefined) {
      console.log('Important Assets Loaded');
      setAppReady(true);
    } else if (assets !== undefined && allAssets !== undefined) {
      console.log('All Assets Loaded');
      setAppReady(true);
    }
  });

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <DataProvider>
          <View onLayout={onLayoutRootView} />
          {appReady && <AppNavigator />}
        </DataProvider>
        <StatusBar style="auto" />
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};

const importantImages = [
  require('./assets/Home/stephan.gif'),
  require('./assets/Home/laura.gif'),
  require('./assets/Home/momodou.gif'),
  require('./assets/Home/colin.gif'),
  require('./assets/Individual/Landing/variant-light.png'),
  require('./assets/Individual/Landing/earth-icon.png'),
  require('./assets/Individual/Landing/eye-icon.png'),
  require('./assets/Individual/Landing/health-icon.png'),
  require('./assets/Individual/Landing/age-icon.png'),
  require('./assets/Individual/Landing/smoking-icon.png'),
];

const allImages = [
  require('./assets/Individual/Landing/IntroVideos/stephan.mp4'),
  require('./assets/Individual/Landing/IntroVideos/colin.mp4'),
  require('./assets/Individual/Landing/IntroVideos/laura.mp4'),
  require('./assets/Individual/Landing/IntroVideos/momodou.mp4'),

  require('./assets/About/more-information_globe.png'),
  require('./assets/About/more-information_twitter.png'),
  require('./assets/About/more-information_blogs.png'),
  require('./assets/About/more-information_www.png'),
  require('./assets/About/ancestry_world.jpeg'),

  require('./assets/Individual/Eyes/blue_eye.png'),
  require('./assets/Individual/Eyes/blue_eye.png'),
  require('./assets/Individual/Eyes/brown_eye.png'),
  require('./assets/Individual/Eyes/brown_eye.png'),

  require('./assets/Individual/Health/heart/stephan_heart_SNV.png'),
  require('./assets/Individual/Health/crohns/stephan_crohn_SNV.png'),
  require('./assets/Individual/Health/ovarian/stephan_ovarian_SNV.png'),
  require('./assets/Individual/Health/heart/colin_heart_SNV.png'),
  require('./assets/Individual/Health/crohns/colin_crohn_SNV.png'),
  require('./assets/Individual/Health/ovarian/colin_ovarian_SNV.png'),
  require('./assets/Individual/Health/heart/laura_heart_SNV.png'),
  require('./assets/Individual/Health/crohns/laura_crohn_SNV.png'),
  require('./assets/Individual/Health/ovarian/laura_ovarian_SNV.png'),
  require('./assets/Individual/Health/heart/momodou_heart_SNV.png'),
  require('./assets/Individual/Health/crohns/momodou_crohn_SNV.png'),
  require('./assets/Individual/Health/ovarian/momodou_ovarian_SNV.png'),

  require('./assets/Individual/Variant/stephan.png'),
  require('./assets/Individual/Variant/colin.png'),
  require('./assets/Individual/Variant/laura.png'),
  require('./assets/Individual/Variant/momodou.png'),

  require('./assets/Individual/Smoking/nonsmoking.png'),
];

export default App;
