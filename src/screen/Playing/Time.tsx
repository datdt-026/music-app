import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "../../component/Text";

interface Props {
  durationMillis: number | undefined;
  positionMillis: number | undefined;
}

const convertMilisecond = (durationMillis: number): string => {
  let seconds = parseInt(`${durationMillis / 1000}`);
  let duration = seconds;
  let hours = duration / 3600;
  duration = duration % 3600;

  let min: number | string = parseInt(`${duration / 60}`);
  duration = duration % 60;

  let sec: number | string = parseInt(`${duration}`);

  if (sec < 10) {
    sec = `0${sec}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (parseInt(`${hours}`, 10) > 0) {
    return `${parseInt(`${hours}`, 10)}:${min}:${sec}`;
  }
  return `${min}:${sec}`;
};

const Time = ({ durationMillis, positionMillis }: Props) => {
  const duration = React.useMemo(() => {
    if (!durationMillis) return "--:--:--";
    return convertMilisecond(durationMillis);
  }, [durationMillis]);

  const position = React.useMemo(() => {
    if (!positionMillis) return "00:00";
    return convertMilisecond(positionMillis);
  }, [positionMillis]);

  return (
    <View style={styles.container}>
      <Text size="h4">{position}</Text>
      <Text size="h4">{duration}</Text>
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
});
