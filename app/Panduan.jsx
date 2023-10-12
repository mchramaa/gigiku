import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import BlueButton from "./components/BlueButton";

export default function Panduan() {
  function handleSikatGigi() {
    console.log("selesai");
  }
  return (
    <LinearGradient colors={["#90e0ef", "#1AA7EC"]}>
      <View style={{ height: "100%" }}>
        <ScrollView>
          <View
            style={{
              marginTop: Constants.statusBarHeight,
              alignItems: "center",
              gap: 10,
            }}
          >
            <BlueButton
              tittle={"Selesai Sikat Gigi"}
              width={300}
              height={50}
              onPress={handleSikatGigi}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
