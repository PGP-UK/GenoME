// To ignore the "ViewPropTypes will be removed from React Native" Warning
import './src/components/ignoreWarnings'

import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import FastImage from 'react-native-fast-image'

import AppNavigator from "./src/components/AppNavigator";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await cacheResourcesAsync()
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    }

    prepare();
  }, []);

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
        <View onLayout={onLayoutRootView} />
        {appReady && <AppNavigator />}
        <StatusBar style="auto" />
      </ApplicationProvider>
    </SafeAreaProvider>
  );
};

async function cacheResourcesAsync() {
  const images = [
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

  const cdnUrls = [
    "/images/home_screen_profiles/stephan.gif",
    "/images/home_screen_profiles/laura.gif",
    "/images/home_screen_profiles/momodou.gif",
    "/images/home_screen_profiles/colin.gif",
  ].map(e => ({uri: `https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets/{e}`}))

  const cacheImages = FastImage.preload(cdnUrls)

  return cacheImages;
}

export default App;
