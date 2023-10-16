import { View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function VidEduIcon({ style }) {
  return (
    <View>
      <AnimatedLottieView
        source={require("./VideoEducation.json")}
        autoPlay
        loop
        style={{ ...style }}
      />
    </View>
  );
}
