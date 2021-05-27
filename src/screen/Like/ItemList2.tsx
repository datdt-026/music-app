import React from "react";
import {
  StyleSheet,
  View,
  ImageSourcePropType,
  Image,
  FlatList,
} from "react-native";
import Text from "../../component/Text";

interface Props {
  title: string;
  source: ImageSourcePropType;
  name: string;
}

const ItemList2 = ({ title, source, name }: Props) => {
  return (
    <View style={styles.container}>
      <Image style={{ width: 160, height: 160 }} source={source} />
      <Text size="h3" style={styles.txtTitle}>
        {title}
      </Text>
      <Text size="h5" status="text_placeholder">
        {name}
      </Text>
    </View>
  );
};

export default ItemList2;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    alignItems: "center",
  },
  txtTitle: {
    marginTop: 16,
    marginBottom: 6,
  },
});
