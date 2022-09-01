const IS_DEV = process.env.APP_VARIANT === 'development';

export default {
  expo: {
    name: IS_DEV ? 'GenoME Client' : 'GenoME',
    slug: "PGP-UK-GenoME",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*", "assets/images/**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: IS_DEV ? "dev.uk.org.personalgenomes.genome" : "uk.org.personalgenomes.genome",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: IS_DEV ? "dev.uk.org.personalgenomes.genome" : "uk.org.personalgenomes.genome",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
  },
};
