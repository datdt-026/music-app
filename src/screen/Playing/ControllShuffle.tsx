import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "../../component/Icon";

const ControllShuffle = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="volume-high-outline" />
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ marginRight: 12 }}>
          <Icon name="repeat" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shuffle" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ControllShuffle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 16,
  },
});
