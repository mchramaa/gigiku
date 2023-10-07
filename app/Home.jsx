import { Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import GigiMaskotSVG from "../assets/icon/GigiMaskotSVG";

export default function Home() {
  let userName = ["User"];
  const quoteStart = ["RAWAT GIGIMU SEKARANG"];
  const quoteEnd = ["DAN NIKMATI SENYUM SEUMUR HIDUPMU"];

  const navigation = useNavigation();
  const ProfileButton = () => {
    navigation.navigate("Profile");
  };

  return (
    <LinearGradient colors={["#1AA7EC", "#90e0ef"]}>
      <View style={{ height: "100%" }}>
        <View
          style={{
            marginTop: Constants.statusBarHeight,
            paddingHorizontal: 20,
          }}
        >
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
                style={{ color: "white" }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <GigiMaskotSVG />
          </View>
          <View style={{}}>
            <Text
              style={{
                textAlign: "center",
                paddingVertical: 30,
                fontSize: 20,
                color: "#03045E",
                fontWeight: "bold",
              }}
            >
              "{quoteStart},{"\n"}{" "}
              <Text style={{ color: "white", fontSize: 15 }}>{quoteEnd}"</Text>
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              height: "38%",
              borderRadius: 15,
              elevation: 10,
              shadowRadius: 3.84,
              shadowOffset: { height: 4 },
              shadowOpacity: 0.3,
            }}
          >
            <Text>Rama</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
