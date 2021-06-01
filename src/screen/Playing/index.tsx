import React from "react";
import { StyleSheet, Dimensions, Animated } from "react-native";
import Layout from "../../component/Layout";
import Header from "../../component/Header";
import Slider from "@react-native-community/slider";
import Time from "./Time";
import SliceSong from "./SliceSong";
import ControllShuffle from "./ControllShuffle";
import ControllPlay from "./ControllPlay";
import { Audio, AVPlaybackStatus } from "expo-av";
import { Sound } from "expo-av/build/Audio";

const { width } = Dimensions.get("window");

export type TStatusSound = "playing" | "pause" | "loading";

const Playing = () => {
  const soundRef = React.useRef<Sound>();
  const [statusSound, setStatusSound] = React.useState<TStatusSound>("loading");
  const [avPlaybackStatus, setAvPlaybackStatus] =
    React.useState<AVPlaybackStatus>();

  const listenPositionMillid = React.useRef<NodeJS.Timeout>();

  const initAndplaySound = React.useCallback(async () => {
    setStatusSound("loading");
    const { sound: _sound } = await Audio.Sound.createAsync({
      uri: "https://drive.google.com/uc?export=download&id=1Zpsqmvfb2jkPYdwz_Noe7-qINNNqmE0f",
    });
    soundRef.current = _sound;
    setStatusSound("playing");
  }, []);

  const playSound = React.useCallback(async () => {
    await soundRef.current?.playAsync();
    setStatusSound("playing");
  }, []);

  const pauseSound = React.useCallback(async () => {
    await soundRef.current?.playAsync();
    setStatusSound("pause");
  }, []);

  const getAvPlaybackStatus = React.useCallback(
    async (_sound = soundRef.current) => {
      const statusAsync: AVPlaybackStatus | undefined =
        await _sound?.getStatusAsync();
      if (!statusAsync) return;
      setAvPlaybackStatus(statusAsync);
    },
    []
  );

  React.useEffect(() => {
    if (statusSound === "playing") {
      listenPositionMillid.current = setInterval(() => {
        getAvPlaybackStatus();
      }, 1000);
    } else {
      listenPositionMillid.current &&
        clearInterval(listenPositionMillid.current);
    }
  }, [statusSound]);

  React.useEffect(() => {
    initAndplaySound();
  }, []);

  React.useEffect(() => {
    //when back, unload sound

    return soundRef.current
      ? () => {
          soundRef.current?.unloadAsync();
        }
      : undefined;
  }, []);

  return (
    <Layout style={{ flex: 1 }}>
      <Header
        title="Playing Now"
        btnLeft={{ icon: "arrow-back", onPress: () => {} }}
      />
      <SliceSong />
      <ControllShuffle />
      <Time
        durationMillis={
          avPlaybackStatus?.isLoaded ? avPlaybackStatus.durationMillis : 0
        }
        positionMillis={
          avPlaybackStatus?.isLoaded ? avPlaybackStatus.positionMillis : 0
        }
      />
      <Slider
        style={{ width: width - 32, height: 40, alignSelf: "center" }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <ControllPlay
        pauseSound={pauseSound}
        playSound={playSound}
        statusSound={statusSound}
      />
    </Layout>
  );
};

export default Playing;

const styles = StyleSheet.create({});
