import { View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function MaskotHello() {
  return (
    <View>
      <AnimatedLottieView
        source={require("../../assets/lottie/TeethHello.json")}
        autoPlay
        loop
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
