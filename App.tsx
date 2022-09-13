// To ignore the "ViewPropTypes will be removed from React Native" Warning
import "./src/components/ignoreWarnings";

import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import FastImage from "react-native-fast-image";

import AppNavigator from "./src/components/AppNavigator";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await cacheResourcesAsync();
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
  const cdnUrl = "https://cdn.jsdelivr.net/gh/PGP-UK/GenoME/assets";
  const videoUrls = [
    "stephan_eyes.mp4",
    "colin_eyes.mp4",
    "laura_eyes.mp4",
    "momodou_eyes.mp4",
  ];

  const cdnUrls = [
    "home_screen_profiles/stephan.gif",
    "home_screen_profiles/laura.gif",
    "home_screen_profiles/momodou.gif",
    "home_screen_profiles/colin.gif",
    "landing_screen_icons/globe-europe-light.png",
    "landing_screen_icons/eye-light.png",
    "landing_screen_icons/heartbeat-light.png",
    "landing_screen_icons/birthday-cake-light.png",
    "landing_screen_icons/smoking-light.png",
    "ancestry_screen_pie/stephan_ancestry.jpeg",
    "ancestry_screen_pie/colin_ancestry.jpeg",
    "ancestry_screen_pie/laura_ancestry.jpeg",
    "ancestry_screen_pie/momodou_ancestry.jpeg",
    "ancestry_screen_pie/ancestry_world.jpeg",
    "variant_screen_pie_charts/stephan.png",
    "variant_screen_pie_charts/laura.png",
    "variant_screen_pie_charts/momodou.png",
    "variant_screen_pie_charts/colin.png",
    "age_pie_charts/stephan.png",
    "age_pie_charts/laura.png",
    "age_pie_charts/momodou.png",
    "age_pie_charts/colin.png",
    "smokers/no-smoking.png",
    "health_screen_SNV/stephan_heart_SNV.png",
    "health_screen_SNV/stephan_crohn_SNV.png",
    "health_screen_SNV/stephan_ovarian_SNV.png",
    "health_screen_SNV/laura_heart_SNV.png",
    "health_screen_SNV/laura_crohn_SNV.png",
    "health_screen_SNV/laura_ovarian_SNV.png",
    "health_screen_SNV/momodou_heart_SNV.png",
    "health_screen_SNV/momodou_crohn_SNV.png",
    "health_screen_SNV/momodou_ovarian_SNV.png",
    "health_screen_SNV/colin_heart_SNV.png",
    "health_screen_SNV/colin_crohn_SNV.png",
    "health_screen_SNV/colin_ovarian_SNV.png",
    "crohns_profiles/colin_crohn_profile.png",
    "crohns_profiles/momodou_crohn_profile.png",
    "crohns_profiles/stephan_crohn_profile.png",
    "crohns_profiles/laura_crohn_profile.png",
    "heart_profiles/colin_heart_profile.png",
    "heart_profiles/momodou_heart_profile.png",
    "heart_profiles/stephan_heart_profile.png",
    "heart_profiles/laura_heart_profile.png",
    "ovarian_profiles/laura_ovarian_profile.png",
    "ovarian_profiles/colin_ovarian_profile.png",
    "ovarian_profiles/momodou_ovarian_profile.png",
    "ovarian_profiles/stephan_ovarian_profile.png",
    "eyes/blue_eye.png",
    "eyes/brown_eye.png",
    "eyes/brown_eye.png",

    "about_us/more-information_globe.png",
    "about_us/more-information_twitter.png",
    "about_us/more-information_blogs.png",
    "about_us/more-information_www.png",
  ].map((e) => ({ uri: `${cdnUrl}/images/{e}` }));

  const cacheImages = FastImage.preload(cdnUrls);
  // FastImage.preload does NOT return a promise
  // So we do not know when all image have been preloaded...
  // See https://github.com/DylanVann/react-native-fast-image/pull/437
  // Maybe replace with https://www.npmjs.com/package/@georstat/react-native-image-cache

  return cacheImages;
}

export default App;
