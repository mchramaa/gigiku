import { Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";

export default function Alarm() {
  return (
    <LinearGradient colors={["#00B4D8", "white"]}>
      <View style={{ height: "100%" }}>
        <View style={{ marginTop: Constants.statusBarHeight }}>
          <Text>Alarm</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
