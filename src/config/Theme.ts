import React from "react";
import { ColorValue } from "react-native";
import Colors from "./Colors";

export type TMode = "dark" | "light";

export interface ITheme {
  background: ColorValue;
  text: ColorValue;
  text_placeholder: ColorValue;
  icon_color: ColorValue;
  tab_background: ColorValue;
  tab_active: ColorValue;
  tab_inactive: ColorValue;
}

export interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

export const themes = {
  light: {
    background: Colors.secondary,
    text: Colors.color_basic_2,
    text_placeholder: Colors.color_basic_4,
    icon_color: Colors.primary,
    tab_background: Colors.color_basic_5,
  },
  dark: {
    background: Colors.primary,
    text: Colors.color_basic_3,
    text_placeholder: Colors.color_basic_3,
    icon_color: Colors.secondary,
    tab_background: Colors.color_basic_5,
  },
};

export const ThemeContext = React.createContext<IThemeContext>({
  theme: themes.light,
  toggleTheme: () => {},
});

export const useTheme = () => {
  const { toggleTheme, theme } = React.useContext(ThemeContext);
  return {
    toggleTheme,
    theme,
  };
};
