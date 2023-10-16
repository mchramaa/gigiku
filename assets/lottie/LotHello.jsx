import { View, Text } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function LotHello({ style }) {
  return (
    <View>
      <AnimatedLottieView
        source={require("./hello.json")}
        autoPlay
        loop
        style={{ ...style }}
      />
    </View>
  );
}
