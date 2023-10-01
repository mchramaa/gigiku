import { Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  let userName = ["User"];

  const navigation = useNavigation();
  const ProfileButton = () => {
    navigation.navigate("Profile");
  };

  return (
    <LinearGradient colors={["#00B4D8", "white"]}>
      <View style={{ height: "100%" }}>
        <View style={{ marginTop: Constants.statusBarHeight }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <Text
              style={{
                paddingLeft: 20,
                fontSize: 25,
                color: "white",
                fontWeight: 700,
              }}
            >
              Hallo {userName},
            </Text>
            <TouchableOpacity onPress={ProfileButton}>
              <Ionicons
                name="ios-person-circle-sharp"
                size={35}
                style={{ paddingRight: 20, color: "white" }}
              />
            </TouchableOpacity>
          </View>
          <View style={{}}></View>
        </View>
      </View>
    </LinearGradient>
  );
}
