import { View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function MaskotYeay({ style }) {
  return (
    <View>
      <AnimatedLottieView
        source={require("./MaskotYeay.json")}
        autoPlay
        loop
        style={{ ...style }}
      />
    </View>
  );
}
