import { View, Text } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function LotHello() {
  return (
    <View>
      <AnimatedLottieView
        source={require("../../assets/lottie/hello.json")}
        autoPlay
        loop
        style={{ width: 200, height: 200, marginBottom: -90 }}
      />
    </View>
  );
}
