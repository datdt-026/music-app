import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "../../component/Icon";
import { TStatusSound } from ".";

interface Props {
  playSound: () => void;
  pauseSound: () => void;
  statusSound: TStatusSound;
}

const ControllPlay = ({ playSound, pauseSound, statusSound }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="play-skip-back-outline" size={32} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginHorizontal: 24 }}
        onPress={() => {
          if (statusSound === "loading") return;
          if (statusSound === "playing") {
            pauseSound();
          } else {
            playSound();
          }
        }}
      >
        {statusSound === "loading" ? (
          <ActivityIndicator />
        ) : statusSound === "playing" ? (
          <Icon name="pause" size={32} />
        ) : (
          <Icon name="play" size={32} />
        )}
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name="play-skip-forward-outline" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default ControllPlay;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
