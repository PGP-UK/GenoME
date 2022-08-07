import React, { useCallback, useEffect, useState } from "react";
import { View } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import AppNavigator from "./components/AppNavigator";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appReady, setAppReady] = useState(false);

  //code below from https://docs.expo.dev/versions/latest/sdk/splash-screen/
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await cacheResourcesAsync()
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
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
        <View onLayout={onLayoutRootView} />
        {appReady && <AppNavigator />}
        <StatusBar style="auto" />
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};

async function cacheResourcesAsync() {
  const images = [
    require("./assets/images/home_screen_profiles/stephan.gif"),
    require("./assets/images/home_screen_profiles/laura.gif"),
    require("./assets/images/home_screen_profiles/momodou.gif"),
    require("./assets/images/home_screen_profiles/colin.gif"),
    require("./assets/images/landing_screen_icons/globe-europe-light.png"),
    require("./assets/images/landing_screen_icons/eye-light.png"),
    require("./assets/images/landing_screen_icons/heartbeat-light.png"),
    require("./assets/images/landing_screen_icons/birthday-cake-light.png"),
    require("./assets/images/landing_screen_icons/smoking-light.png"),
    require("./assets/images/ancestry_screen_pie/stephan_ancestry.jpeg"),
    require("./assets/images/ancestry_screen_pie/colin_ancestry.jpeg"),
    require("./assets/images/ancestry_screen_pie/laura_ancestry.jpeg"),
    require("./assets/images/ancestry_screen_pie/momodou_ancestry.jpeg"),
    require("./assets/images/variant_screen_pie_charts/stephan.png"),
    require("./assets/images/variant_screen_pie_charts/laura.png"),
    require("./assets/images/variant_screen_pie_charts/momodou.png"),
    require("./assets/images/variant_screen_pie_charts/colin.png"),
    require("./assets/images/age_pie_charts/stephan.png"),
    require("./assets/images/age_pie_charts/laura.png"),
    require("./assets/images/age_pie_charts/momodou.png"),
    require("./assets/images/age_pie_charts/colin.png"),
    require("./assets/images/smokers/no-smoking.png"),
    require("./assets/images/health_screen_SNV/stephan_heart_SNV.png"),
    require("./assets/images/health_screen_SNV/stephan_crohn_SNV.png"),
    require("./assets/images/health_screen_SNV/stephan_ovarian_SNV.png"),
    require("./assets/images/health_screen_SNV/laura_heart_SNV.png"),
    require("./assets/images/health_screen_SNV/laura_crohn_SNV.png"),
    require("./assets/images/health_screen_SNV/laura_ovarian_SNV.png"),
    require("./assets/images/health_screen_SNV/momodou_heart_SNV.png"),
    require("./assets/images/health_screen_SNV/momodou_crohn_SNV.png"),
    require("./assets/images/health_screen_SNV/momodou_ovarian_SNV.png"),
    require("./assets/images/health_screen_SNV/colin_heart_SNV.png"),
    require("./assets/images/health_screen_SNV/colin_crohn_SNV.png"),
    require("./assets/images/health_screen_SNV/colin_ovarian_SNV.png"),
    require("./assets/images/crohns_profiles/colin_crohn_profile.png"),
    require("./assets/images/crohns_profiles/momodou_crohn_profile.png"),
    require("./assets/images/crohns_profiles/stephan_crohn_profile.png"),
    require("./assets/images/crohns_profiles/laura_crohn_profile.png"),
    require("./assets/images/heart_profiles/colin_heart_profile.png"),
    require("./assets/images/heart_profiles/momodou_heart_profile.png"),
    require("./assets/images/heart_profiles/stephan_heart_profile.png"),
    require("./assets/images/heart_profiles/laura_heart_profile.png"),
    require("./assets/images/ovarian_profiles/laura_ovarian_profile.png"),
    require("./assets/images/ovarian_profiles/colin_ovarian_profile.png"),
    require("./assets/images/ovarian_profiles/momodou_ovarian_profile.png"),
    require("./assets/images/ovarian_profiles/stephan_ovarian_profile.png"),
    require("./assets/images/ancestry_screen_pie/ancestry_world.jpeg"),
    require("./assets/images/about_us/more-information_globe.png"),
    require("./assets/images/about_us/more-information_twitter.png"),
    require("./assets/images/about_us/more-information_blogs.png"),
    require("./assets/images/about_us/more-information_www.png"),
    require("./assets/images/eyes/blue_eye.png"),
    require("./assets/images/eyes/brown_eye.png"),
    require("./assets/images/eyes/brown_eye.png"),
    require("./assets/videos/stephan_eyes.mp4"),
    require("./assets/videos/colin_eyes.mp4"),
    require("./assets/videos/laura_eyes.mp4"),
    require("./assets/videos/momodou_eyes.mp4"),
  ];

  const cacheImages = images.map((image) =>
    Asset.fromModule(image).downloadAsync()
  );

  return Promise.all(cacheImages);
}

export default App;
