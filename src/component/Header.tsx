import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Layout from "./Layout";
import Text from "./Text";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useTheme } from "../config/Theme";
import Icon from "./Icon";
interface Props {
  title: string;
  btnLeft?: {
    icon: string;
    onPress: () => void;
  };
  btnRight?: {
    icon: string;
    onPress: () => void;
  };
}

const Header = ({ title, btnLeft, btnRight }: Props) => {
  const { theme } = useTheme();
  return (
    <Layout style={styles.container}>
      {!!btnLeft ? (
        <TouchableOpacity style={styles.btn} onPress={btnLeft.onPress}>
          <Icon name={btnLeft.icon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.btn} />
      )}

      <View style={styles.body}>
        <Text size="h2" font="Medium">
          {title}
        </Text>
      </View>

      {!!btnRight ? (
        <TouchableOpacity style={styles.btn} onPress={btnRight.onPress}>
          <Icon name={btnRight.icon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.btn} />
      )}
    </Layout>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
  },
  btn: {
    width: 48,
    height: 48,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
