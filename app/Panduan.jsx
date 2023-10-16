import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import StepPlayer from "./util/StepPlayer";
import MaskotGuide from "../assets/lottie/MaskotGuide";

export default function Panduan() {
  const dataStep = [
    {
      src: require("../assets/Step1.webm"),
      note: "Tuangkan Pasta gigi pada sikat gigi sebesar biji jagung,  Gerakan sikat gigi pada gigi depan atas bawah dengan tegak lurus sumbu gigi ",
    },
    {
      src: require("../assets/Step2.webm"),
      note: "Gerakan sikat gigi pada gigi depan dengan sudut 45 derajat dari sisi merah",
    },
    {
      src: require("../assets/Step3.webm"),
      note: "Gosok Gigi Kanan Ke kiri untuk membersihkan sela sela gigi",
    },
    {
      src: require("../assets/Step4.webm"),
      note: "Gerakan sikat gigi pada gigi belakang dengan menarik dari depan ke belakang pada permukaan",
    },
    {
      src: require("../assets/Step5.webm"),
      note: "Sikat pula lidah secara perlahan",
    },
  ];

  return (
    <LinearGradient colors={["#1AA7EC", "#90e0ef"]}>
      <View style={{ marginTop: Constants.statusBarHeight }}>
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <MaskotGuide
              style={{
                height: 200,
                marginTop: -10,
                marginBottom: -20,
                marginRight: -30,
              }}
            />
            <Text
              style={{
                fontSize: 35,
                color: "white",
                fontFamily: "Poppins-Bold",
              }}
            >
              Panduan
              {"\n"}
              <Text style={{ fontSize: 30 }}>Sikat Gigi...</Text>
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              gap: 20,
              marginBottom: 50,
              paddingHorizontal: 50,
            }}
          >
           
              <View
             
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  elevation: 3,
                  shadowOpacity: 0.2,
                  shadowOffset: { height: 1 },
                  borderRadius: 10,
                  paddingTop: 20,
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <StepPlayer
                  source={require("../assets/Step1.webm")}
                  style={{ width: "100%", height: 200 }}
                />
                <Text
                  style={{
                    paddingHorizontal: 10,
                    textAlign: "center",
                    fontSize: 15,
                    fontFamily: "Poppins-SemiBold",
                    paddingBottom: 20,
                  }}
                >
                 Tuangkan Pasta gigi pada sikat gigi sebesar biji jagung,  Gerakan sikat gigi pada gigi depan atas bawah dengan tegak lurus sumbu gigi
                </Text>
              </View>

              <View
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  elevation: 3,
                  shadowOpacity: 0.2,
                  shadowOffset: { height: 1 },
                  borderRadius: 10,
                  paddingTop: 20,
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <StepPlayer
                  source={require("../assets/Step2.webm")}
                  style={{ width: "100%", height: 200 }}
                />
                <Text
                  style={{
                    paddingHorizontal: 10,
                    textAlign: "center",
                    fontSize: 15,
                    fontFamily: "Poppins-SemiBold",
                    paddingBottom: 20,
                  }}
                >
                  Gerakan sikat gigi pada gigi depan dengan sudut 45 derajat dari sisi merah
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  elevation: 3,
                  shadowOpacity: 0.2,
                  shadowOffset: { height: 1 },
                  borderRadius: 10,
                  paddingTop: 20,
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <StepPlayer
                  source={require("../assets/Step3.webm")}
                  style={{ width: "100%", height: 200 }}
                />
                <Text
                  style={{
                    paddingHorizontal: 10,
                    textAlign: "center",
                    fontSize: 15,
                    fontFamily: "Poppins-SemiBold",
                    paddingBottom: 20,
                  }}
                >
                  Gosok Gigi Kanan Ke kiri untuk membersihkan sela sela gigi
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  elevation: 3,
                  shadowOpacity: 0.2,
                  shadowOffset: { height: 1 },
                  borderRadius: 10,
                  paddingTop: 20,
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <StepPlayer
                  source={require("../assets/Step5.webm")}
                  style={{ width: "100%", height: 200 }}
                />
                <Text
                  style={{
                    paddingHorizontal: 10,
                    textAlign: "center",
                    fontSize: 15,
                    fontFamily: "Poppins-SemiBold",
                    paddingBottom: 20,
                  }}
                >
                 Sikat pula lidah secara perlahan
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  elevation: 3,
                  shadowOpacity: 0.2,
                  shadowOffset: { height: 1 },
                  borderRadius: 10,
                  paddingTop: 20,
                  alignItems: "center",
                  paddingHorizontal: 10,
                }}
              >
                <StepPlayer
                  source={require("../assets/Step4.webm")}
                  style={{ width: "100%", height: 200 }}
                />
                <Text
                  style={{
                    paddingHorizontal: 10,
                    textAlign: "center",
                    fontSize: 15,
                    fontFamily: "Poppins-SemiBold",
                    paddingBottom: 20,
                  }}
                >
                  Gerakan sikat gigi pada gigi belakang dengan menarik dari depan ke belakang pada permukaan
                </Text>
              </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
