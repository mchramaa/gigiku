import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import useAlarm from "./hooks/useAlarm";
import MaskotHome from "../assets/lottie/MaskotHome";
import AlarmBox from "./components/AlarmBox";
import AppCalendar from "./util/AppCalendar";
import { ScrollView } from "react-native-gesture-handler";
import CalendarIconSVG from "../assets/icon/CalendarIconSVG";

export default function Alarm({ navigation }) {
  const { AlarmData } = useAlarm();
  const textUp = ["Jangan Lupa !!"];
  const textDown = ["Pasang alarm sikat gigi ya...."];

  const SetAlarm = () => {
    navigation.navigate("SetAlarm");
  };

  return (
    <LinearGradient colors={["#1AA7EC", "#90e0ef"]} style={{ height: "100%" }}>
      <ScrollView
        style={{
          marginTop: Constants.statusBarHeight,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <MaskotHome
            style={{
              height: 140,
              marginTop: -10,
              marginBottom: -20,
            }}
          />
          <Text
            style={{
              fontSize: 27,
              color: "white",
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {textUp}
            {"\n"}
            <Text style={{ fontSize: 18 }}>{textDown}</Text>
          </Text>
        </View>

        <View style={{ marginBottom: 200 }}>
          <AlarmBox tittle={"Sikat Gigi Pagi"} />
          <AlarmBox tittle={"Sikat Gigi Malam"} />

          <AppCalendar />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
