import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import { RootStackParamList } from "../../navigation/RootStack";
import ItemSong from "./ItemSong";
const { width } = Dimensions.get("window");
const spacing = 60;
const widthImg = width - 120;

const SliceSong = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const route = useRoute<RouteProp<RootStackParamList, "Playing">>();

  const renderItem = React.useCallback(({ item, index }) => {
    return (
      <ItemSong
        name={item.name}
        author={item.author}
        uri={item.id}
        id={item.id}
        source={item.source}
        scrollX={scrollX}
        index={index}
      />
    );
  }, []);
  return (
    <View>
      <Animated.FlatList
        horizontal
        data={route.params.listSong}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        decelerationRate="fast"
        snapToInterval={widthImg}
        style={{ flexGrow: 0 }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          paddingHorizontal: spacing,
        }}
      />
    </View>
  );
};

export default SliceSong;

const styles = StyleSheet.create({});
