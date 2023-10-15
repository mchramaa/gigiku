import { View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function MaskotHome({ style }) {
  return (
    <View>
      <AnimatedLottieView
        source={require("./MaskotHome.json")}
        autoPlay
        loop
        style={{ ...style }}
      />
    </View>
  );
}
