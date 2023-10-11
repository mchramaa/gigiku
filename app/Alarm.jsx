import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import RefGigiMaskotSVG from "../assets/icon/RefGigiMaskotSVG";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useAlarm from "./hooks/useAlarm";

export default function Alarm({ navigation }) {
  const { AlarmData } = useAlarm();
  const textUp = ["Jangan Lupa !!"];
  const textDown = ["Pasang alarm sikat gigi ya...."];

  const SetAlarm = () => {
    navigation.navigate("SetAlarm");
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
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <RefGigiMaskotSVG />

            <Text
              style={{
                fontSize: 30,
                marginHorizontal: 10,
                fontWeight: "600",
                color: "white",
              }}
            >
              {textUp}
              {"\n"}
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                {textDown}
              </Text>
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "white",
              height: "73%",
              borderRadius: 15,
              elevation: 10,
              shadowRadius: 3.84,
              shadowOffset: { height: 4 },
              shadowOpacity: 0.3,
              position: "relative",
            }}
          >
            <View
              style={{
                position: "relative",
                height: "100%",
                padding: 15,
                paddingBottom: 50,
              }}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                {AlarmData.map((data, index) => (
                  <View
                    key={index}
                    style={{
                      paddingVertical: 10,
                      flexWrap: "wrap",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-around",
                      borderBottomWidth: 0.5,
                      borderColor: "#D9D9D9",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="alarm-multiple"
                      size={35}
                      color="#1AA7EC"
                    />
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "85%",
                      }}
                    >
                      <Text style={{ fontSize: 21, fontWeight: "600" }}>
                        {data.tag}
                      </Text>

                      <View
                        style={{
                          width: "26%",
                          paddingVertical: 3,
                          borderRadius: 5,
                          flexDirection: "row",
                          justifyContent: "center",
                          backgroundColor: "#1AA7EC",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 25,
                            textAlign: "center",
                            fontWeight: "700",
                            color: "white",
                          }}
                        >
                          {data.hours}:{data.minute}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
            <TouchableOpacity onPress={SetAlarm}>
              <View
                style={{
                  position: "absolute",
                  flexDirection: "row",
                  bottom: 0,
                  height: 50,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomStartRadius: 15,
                  borderBottomEndRadius: 15,
                  backgroundColor: "#00B4D8",
                }}
              >
                <View style={{ paddingRight: 5 }}>
                  <MaterialIcons name="add-alarm" size={25} color="white" />
                </View>
                <Text style={{ fontSize: 20, fontWeight: 600, color: "white" }}>
                  Tambah Alarm Baru
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
