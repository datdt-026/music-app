import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import Layout from "../../component/Layout";
import Header from "../../component/Header";
import { RootStackParamList } from "../../navigation/RootStack";
import { RouteProp, useRoute } from "@react-navigation/core";
import Text from "../../component/Text";
import Slider from "@react-native-community/slider";

import ItemSong from "./ItemSong";
import Icon from "../../component/Icon";

const { width } = Dimensions.get("window");
const spacing = 60;
const widthImg = width - 120;

const Playing = () => {
  const route = useRoute<RouteProp<RootStackParamList, "Playing">>();

  const scrollX = React.useRef(new Animated.Value(0)).current;

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
    <Layout style={{ flex: 1 }}>
      <Header
        title="Playing Now"
        btnLeft={{ icon: "arrow-back", onPress: () => {} }}
      />
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          marginTop: 16,
        }}
      >
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
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          flexDirection: "row",
          paddingHorizontal: 16,
          justifyContent: "space-between",
        }}
      >
        <Text size="h4">00:00</Text>
        <Text size="h4">04:00</Text>
      </View>
      <View>
        <Slider
          style={{ width: width - 32, height: 40, alignSelf: "center" }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
      </View>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Icon name="play-skip-back-outline" size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 24 }}>
          <Icon name="pause" size={32} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="play-skip-forward-outline" size={32} />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Playing;

const styles = StyleSheet.create({});
