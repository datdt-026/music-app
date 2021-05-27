import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Layout from "../../component/Layout";
import likeSong, { ISong } from "../../data/likeSong";
import ItemSong from "./ItemSong";
import { RootStackParamList } from "../../navigation/RootStack";
import Header from "../../component/Header";
import ListHeader from "./ListHeader";
import { NavigationProp, useNavigation } from "@react-navigation/core";

const Like = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const [data, setData] = React.useState(likeSong);
  const [isRefresh, setIsRefresh] = React.useState(false);

  const goPlaying = React.useCallback(() => {
    navigate("Playing", { listSong: data });
  }, [data]);

  const onRefresh = React.useCallback(() => {
    setIsRefresh(true);
    setTimeout(() => {
      setData(likeSong);
      setIsRefresh(false);
    }, 1000);
  }, []);

  const onEndReached = React.useCallback(() => {
    //check het data
    setData((prev: ISong[]) => prev.concat(likeSong));
  }, []);

  const renderItem = React.useCallback(({ item }: { item: ISong }) => {
    return (
      <ItemSong
        name={item.name}
        author={item.author}
        uri={item.id}
        id={item.id}
        source={item.source}
        onPress={goPlaying}
      />
    );
  }, []);

  return (
    <Layout style={{ flex: 1 }}>
      <Header
        title=""
        btnRight={{ icon: "options-outline", onPress: () => {} }}
      />

      <FlatList
        data={likeSong}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        ListHeaderComponent={ListHeader}
        refreshing={isRefresh}
        onRefresh={onRefresh}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached} //loadmore data
      />
    </Layout>
  );
};

export default Like;

const styles = StyleSheet.create({});
