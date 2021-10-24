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
    require('./assets/images/landing_screen_icons/globe-europe-light.png'),
    require('./assets/images/landing_screen_icons/eye-light.png'),
    require('./assets/images/landing_screen_icons/heartbeat-light.png'),
    require('./assets/images/landing_screen_icons/birthday-cake-light.png'),
    require('./assets/images/landing_screen_icons/smoking-light.png'),
    require('./assets/images/ancestry_screen_pie/stephan_ancestry.jpeg'),
    require('./assets/images/ancestry_screen_pie/colin_ancestry.jpeg'),
    require('./assets/images/ancestry_screen_pie/laura_ancestry.jpeg'),
    require('./assets/images/ancestry_screen_pie/momodou_ancestry.jpeg'),
    require('./assets/images/variant_screen_pie_charts/stephan.png'),
    require('./assets/images/variant_screen_pie_charts/laura.png'),
    require('./assets/images/variant_screen_pie_charts/momodou.png'),
    require('./assets/images/variant_screen_pie_charts/colin.png'),
    require('./assets/images/age_pie_charts/stephan.png'),
    require('./assets/images/age_pie_charts/laura.png'),
    require('./assets/images/age_pie_charts/momodou.png'),
    require('./assets/images/age_pie_charts/colin.png'),
    require('./assets/images/smokers/no-smoking.png'),
    require('./assets/images/smokers/no-smoking.png'),
    require('./assets/images/smokers/no-smoking.png'),
    require('./assets/images/smokers/no-smoking.png'),
    require('./assets/images/health_screen_SNV/stephan_heart_SNV.png'),
    require('./assets/images/health_screen_SNV/stephan_crohn_SNV.png'),
    require('./assets/images/health_screen_SNV/stephan_ovarian_SNV.png'),
    require('./assets/images/health_screen_SNV/laura_heart_SNV.png'),
    require('./assets/images/health_screen_SNV/laura_crohn_SNV.png'),
    require('./assets/images/health_screen_SNV/laura_ovarian_SNV.png'),
    require('./assets/images/health_screen_SNV/momodou_heart_SNV.png'),
    require('./assets/images/health_screen_SNV/momodou_crohn_SNV.png'),
    require('./assets/images/health_screen_SNV/momodou_ovarian_SNV.png'),
    require('./assets/images/health_screen_SNV/colin_heart_SNV.png'),
    require('./assets/images/health_screen_SNV/colin_crohn_SNV.png'),
    require('./assets/images/health_screen_SNV/colin_ovarian_SNV.png'),
    require('./assets/images/crohns_profiles/colin_crohn_profile.png'),
    require('./assets/images/crohns_profiles/momodou_crohn_profile.png'),
    require('./assets/images/crohns_profiles/stephan_crohn_profile.png'),
    require('./assets/images/crohns_profiles/laura_crohn_profile.png'),
    require('./assets/images/heart_profiles/colin_heart_profile.png'),
    require('./assets/images/heart_profiles/momodou_heart_profile.png'),
    require('./assets/images/heart_profiles/stephan_heart_profile.png'),
    require('./assets/images/heart_profiles/laura_heart_profile.png'),
    require('./assets/images/ovarian_profiles/laura_ovarian_profile.png'),
    require('./assets/images/ovarian_profiles/colin_ovarian_profile.png'),
    require('./assets/images/ovarian_profiles/momodou_ovarian_profile.png'),
    require('./assets/images/ovarian_profiles/stephan_ovarian_profile.png'),
  ];

  const cacheImages = images.map((image) =>
    Asset.fromModule(image).downloadAsync()
  );

  return Promise.all(cacheImages);
}

export default App;
