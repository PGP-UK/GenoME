const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

export default {
  expo: {
    name: IS_PREVIEW ? 'GenoME' : 'GenoME Client',
    slug: IS_PREVIEW ? "PGP-UK-GenoME" : "PGP-UK-GenoME-dev",
    version: "1.0.0",
    orientation: "default",
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
      bundleIdentifier: IS_PREVIEW ? "uk.org.personalgenomes.genome" : "dev.uk.org.personalgenomes.genome",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
      package: IS_PREVIEW ? "uk.org.personalgenomes.genome" : "dev.uk.org.personalgenomes.genome",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: IS_PREVIEW ? "efd04051-a37b-40e5-b844-a7d1ddd87176" : "2d0a3a0e-accc-4e0c-85cd-44d7e6cb0aa3"
      }
    }
  },
};
