const IS_DEVELOPMENT = ['development', 'simulator'].includes(process.env.APP_VARIANT)

export default {
  expo: {
    name: IS_DEVELOPMENT ? 'GenoME Client' : 'GenoME',
    slug: IS_DEVELOPMENT ? 'PGP-UK-GenoME-dev' : 'PGP-UK-GenoME',
    version: '1.0.0',
    orientation: 'default',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: IS_DEVELOPMENT
        ? 'dev.co.uk.UCL.Genome'
        : 'co.uk.UCL.Genome'
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: IS_DEVELOPMENT
        ? 'dev.co.uk.UCL.Genome'
        : 'co.uk.UCL.Genome',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    jsEngine: "hermes",
    extra: {
      eas: {
        projectId: IS_DEVELOPMENT
          ? '2d0a3a0e-accc-4e0c-85cd-44d7e6cb0aa3'
          : 'efd04051-a37b-40e5-b844-a7d1ddd87176',
      },
    },
  },
};
