import { View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function VideoICN({ style }) {
  return (
    <View>
      <AnimatedLottieView
        source={require("./videoIcon.json")}
        autoPlay
        loop
        colorFilters={[{ color: "pink" }]}
        style={{ ...style }}
      />
    </View>
  );
}
