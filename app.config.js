export default {
  expo: {
    name: "Flixo",
    slug: "Flixo",
    privacy: "public",
    platforms: ["android"],
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/Flixo-Logo.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    description:
      "🤳🏾 Made to share your best moments and smiles with your friends.",
    githubUrl: "https://github.com/jrodriguezdiazz/Flixo",
    extra: {
      eas: {
        projectId: "049d6062-0db1-4827-9a03-82c850082a40",
      },
    },
    android: {
      package: "com.jrodriguezdiazz.Flixo",
    },
    plugins: [
      [
        "expo-camera",
        {
          cameraPermission: "Allow $(PRODUCT_NAME) to access your camera.",
        },
      ],
    ],
  },
};
