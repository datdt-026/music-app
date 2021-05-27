import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ISong } from "../data/likeSong";
import Playing from "../screen/Playing";
import MainTab from "./MainTab";

export type RootStackParamList = {
  MainTab: undefined;
  Playing: {
    listSong: ISong[];
  };
};

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Playing"
        component={Playing}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
