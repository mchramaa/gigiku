import { View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function Step1({ style }) {
  return (
    <View>
      <AnimatedLottieView
        source={require("./data.json")}
        autoPlay
        loop
        style={{ ...style }}
      />
    </View>
  );
}
