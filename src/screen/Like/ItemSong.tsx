import React from "react";
import { TouchableOpacity } from "react-native";
import { Dimensions, StyleSheet, View, Image } from "react-native";
import Text from "../../component/Text";
import { ISong } from "../../data/likeSong";

const { width } = Dimensions.get("window");
const widthItem = (width - 16) / 2;
const widthImg = (width - 48) / 2;

interface Props extends ISong {
  onPress: () => void;
}

const ItemSong = ({ name, author, source, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: source }} style={styles.img} borderRadius={6} />
      <Text size={"h3"} font="Bold" style={styles.txtName}>
        {name}
      </Text>
      <Text size={"h5"} font="Medium" style={styles.txtAuthor}>
        {author}
      </Text>
    </TouchableOpacity>
  );
};

export default ItemSong;

const styles = StyleSheet.create({
  container: {
    width: widthItem,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  img: {
    width: widthImg,
    height: widthImg,
  },
  txtName: {
    alignSelf: "center",
    marginTop: 12,
    marginBottom: 5,
  },
  txtAuthor: {
    alignSelf: "center",
  },
});
