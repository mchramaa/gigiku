import { View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function MaskotHome() {
  return (
    <View>
      <AnimatedLottieView
        source={require("./Maskot.json")}
        autoPlay
        loop
        style={{ width: 200, height: 200, marginTop: -40 }}
      />
    </View>
  );
}
