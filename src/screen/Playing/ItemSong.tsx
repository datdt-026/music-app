import React from "react";
import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";
import { Size } from "../../component/Text";
import { ISong } from "../../data/likeSong";

const { width } = Dimensions.get("window");
const spacing = 60;
const widthImg = width - spacing * 2;

interface Props extends ISong {
  scrollX: Animated.Value;
  index: number;
}

const ItemSong = ({ source, name, author, scrollX, index }: Props) => {
  const inputRange = React.useMemo(
    () => [(index - 1) * widthImg, index * widthImg, (index + 1) * widthImg],
    [index]
  );

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.75, 1, 0.75],
  });

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.5, 1, 0.5],
  });
  return (
    <View style={{ width: widthImg }}>
      <Animated.Image
        source={{ uri: source }}
        style={[
          styles.container,
          {
            transform: [{ scale }],
            opacity,
          },
        ]}
        borderRadius={4}
      />
      <Animated.Text
        style={[
          styles.txtName,
          {
            transform: [{ scale }],
            color: "#FFF",
          },
        ]}
      >
        {name}
      </Animated.Text>
      <Animated.Text
        style={[
          styles.txtAuthor,
          {
            transform: [{ scale }],
            color: "#FFF",
          },
        ]}
      >
        {author}
      </Animated.Text>
    </View>
  );
};

export default ItemSong;

const styles = StyleSheet.create({
  container: {
    width: widthImg,
    height: widthImg,
  },
  txtName: {
    alignSelf: "center",
    fontSize: Size["h1"].value,
    marginTop: 16,
    marginBottom: 4,
  },
  txtAuthor: {
    alignSelf: "center",
    fontSize: Size["h5"].value,
  },
});
