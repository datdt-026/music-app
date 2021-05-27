import "react-native-gesture-handler";
import React, { useCallback, useMemo, useState } from "react";
import { themes, ThemeContext, TMode, ITheme } from "./src/config/Theme";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/RootStack";
import { useFonts } from "expo-font";
export default function App() {
  const [mode, setMode] = useState<TMode>("dark");
  const [loaded] = useFonts({
    Regular: require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    Bold: require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    Heavy: require("./assets/fonts/SF-Pro-Display-Heavy.otf"),
    Light: require("./assets/fonts/SF-Pro-Display-Light.otf"),
    Medium: require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    Semibold: require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  });

  const theme: ITheme = useMemo(
    () => (mode === "dark" ? themes.dark : themes.light),
    [mode]
  );
  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  if (!loaded) {
    return null;
  }
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
