import React from "react";
import { ScrollView, View } from "react-native";
import Text from "../../component/Text";
import ItemList from "./ItemList";

const data = [
  {
    id: "0",
    title: "Monters Go Bump",
    name: "Erika recinos",
    source: require("../../../assets/img/img1.png"),
  },
  {
    id: "1",
    title: "Monters Go Bump",
    name: "Erika recinos",
    source: require("../../../assets/img/img1.png"),
  },
];

interface Props {
  title: string;
}

const RowList = ({ title }: Props) => {
  return (
    <View style={{ marginTop: 24 }}>
      <Text style={{ paddingLeft: 16, marginBottom: 20 }}>{title}</Text>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <ItemList
              key={index}
              title={item.title}
              source={item.source}
              name={item.name}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RowList;
