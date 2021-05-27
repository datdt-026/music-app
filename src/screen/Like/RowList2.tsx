import React from "react";
import { FlatList } from "react-native";
import { ScrollView, View } from "react-native";
import Text from "../../component/Text";
import ItemList2 from "./ItemList2";

const data = [
  {
    id: "0",
    title: "Believer",
    name: "IMAGINE DRAGON",
    source: require("../../../assets/img/img2.png"),
  },
  {
    id: "1",
    title: "Short",
    name: "RYAN GRIGDRY",
    source: require("../../../assets/img/Shortwave.png"),
  },
  {
    id: "2",
    title: "Dream On",
    name: "ROGER TERRY",
    source: require("../../../assets/img/img3.png"),
  },
  {
    id: "3",
    title: "Origins",
    name: "IMAGINE DRAGON",
    source: require("../../../assets/img/img4.png"),
  },
  {
    id: "4",
    title: "",
    name: "",
    source: require("../../../assets/img/img5.png"),
  },
  {
    id: "5",
    title: "",
    name: "",
    source: require("../../../assets/img/retro.png"),
  },
];

interface Props {
  title: string;
}

const RowList2 = ({ title }: Props) => {
  return (
    <View style={{ marginTop: 24 }}>
      <Text style={{ paddingLeft: 16, marginBottom: 20 }}>{title}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <ItemList2
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

export default RowList2;
