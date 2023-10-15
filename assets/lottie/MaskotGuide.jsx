import { View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function MaskotGuide({ style }) {
  return (
    <View>
      <AnimatedLottieView
        source={require("./MaskotGuide.json")}
        autoPlay
        loop
        style={{ ...style }}
      />
    </View>
  );
}
