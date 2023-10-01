import { Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import Profile from "./Profile";

export default function Home() {
  let userName = ["User"];
  return (
    <LinearGradient colors={["#00B4D8", "white"]}>
      <View style={{ height: "100%" }}>
        <View style={{ marginTop: Constants.statusBarHeight }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Ionicons
              name="ios-person-circle-sharp"
              size={30}
              color="white"
              onPress={Profile}
            />
          </View>
          <View style={{}}>
            <Text>Hallo {userName}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
