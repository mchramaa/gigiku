import { Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

export default function Panduan() {
  return (
    <LinearGradient colors={["#90e0ef", "#1AA7EC"]}>
      <View style={{ height: "100%" }}>
        <View style={{ marginTop: Constants.statusBarHeight }}>
          <Text>Panduan</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
