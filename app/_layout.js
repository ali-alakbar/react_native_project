import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

const Layout = () => {
  SplashScreen.preventAutoHideAsync();

  const [loadedFonts] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMed: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (loadedFonts) {
      await SplashScreen.hideAsync();
    }
  }, [loadedFonts]);

  if (!loadedFonts) return null;

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
