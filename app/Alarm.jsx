import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import useAlarm from "./hooks/useAlarm";
import MaskotHome from "../assets/lottie/MaskotHome";
import AlarmBox from "./components/AlarmBox";

export default function Alarm({ navigation }) {
  const { AlarmData } = useAlarm();
  const textUp = ["Jangan Lupa !!"];
  const textDown = ["Pasang alarm sikat gigi ya...."];

  const SetAlarm = () => {
    navigation.navigate("SetAlarm");
  };

  return (
    <LinearGradient colors={["#1AA7EC", "#90e0ef"]} style={{ height: "100%" }}>
      <View
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
          }}
        >
          <MaskotHome
            style={{
              width: 150,
              height: 150,
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
        <AlarmBox tittle={"Sikat Gigi Pagi"} />
        <AlarmBox tittle={"Sikat Gigi Malam"} />

        {/* SIKAT GIGI PAGI */}
        {/* <View
          style={{
            marginTop: 20,
            backgroundColor: "white",
            height: "auto",
            padding: 10,
            borderRadius: 15,
            elevation: 10,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"time"}
              is24Hour={true}
              onChange={onChange}
              display="spinner"
              onTouchCancel={() => setShow(false)}
            />
          )}
          <View
            style={{
              justifyContent: "center",
            }}
          >
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}>
              Sikat Gigi Pagi
            </Text>
            <Text
              style={{
                fontSize: 40,
                fontFamily: "Poppins-Bold",
                color: "#1AA7EC",
                marginBottom: -15,
                marginTop: -10,
              }}
            >
              {date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </Text>
            <View style={{ flexDirection: "row" }}></View>
          </View>
          <TouchableOpacity
            onPress={showTimepicker}
            style={{
              backgroundColor: "#1AA7EC",
              paddingHorizontal: 20,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 25,
                color: "white",
              }}
            >
              Edit Jam
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </LinearGradient>
  );
}
