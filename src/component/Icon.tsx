import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../config/Theme";

interface Props {
  name: any;
  size?: number;
}

const Icon = ({ name, size = 24 }: Props) => {
  const { theme } = useTheme();

  return <Ionicons name={name} size={size} color={theme.icon_color} />;
};

export default Icon;
