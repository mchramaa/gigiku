import { Image, Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "./hooks/useAuth.zustand";
import Box from "./components/Box";
import CalendarIconSVG from "../assets/icon/CalendarIconSVG";

import { Entypo } from "@expo/vector-icons";
import MaskotHome from "../assets/lottie/MaskotHome";
import VideoICN from "../assets/lottie/VideoICN";

export default function Home() {
  const { user } = useAuth();
  const quoteStart = ["GEMAS"];
  const quoteEnd = ["Gigi Sehat Menuju Masa Depan Cerah"];

  const navigation = useNavigation();
  const ProfileButton = () => {
    navigation.navigate("Profile");
  };
  const setFirstName = () => {
    navigation.navigate("SetNewName");
  };
  const EditAlarm = () => {
    navigation.navigate("EditAlarm");
  };

  return (
    <LinearGradient colors={["#1AA7EC", "#90e0ef"]}>
      <View style={{ height: "100%" }}>
        <View
          style={{
            marginTop: Constants.statusBarHeight,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingTop: 10,
            paddingHorizontal: 15,
            position: "absolute",
            zIndex: 10,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              color: "white",

              fontFamily: "Poppins-Bold",
            }}
          >
            Hallo {user.name},
          </Text>
          <TouchableOpacity onPress={ProfileButton}>
            <Ionicons
              name="ios-person-circle-sharp"
              size={35}
              style={{ color: "white" }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 20,
              position: "relative",
              marginBottom: 70,
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 150,
              }}
            >
              <MaskotHome
                style={{
                  width: 300,
                  height: 300,
                  marginTop: -15,
                  marginBottom: -50,
                }}
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  textAlign: "center",
                  paddingVertical: 30,
                  fontSize: 30,
                  color: "#03045E",
                  fontFamily: "Poppins-Bold",
                }}
              >
                {quoteStart}
                {"\n"}
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  "{quoteEnd}"
                </Text>
              </Text>
            </View>

            <Box
              button={true}
              width={390}
              height={100}
              icon={<CalendarIconSVG />}
              tittle={"Riwayat Sikat Gigi"}
              fontStyle={{
                fontFamily: "Poppins-Bold",
                fontSize: 23,
                paddingLeft: 20,
                color: "#1AA7EC",
              }}
              iconStyle={{ width: 100, height: 100 }}
            />

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                backgroundColor: "white",
                borderRadius: 15,
                elevation: 10,
                shadowRadius: 3.84,
                shadowOffset: { height: 4 },
                shadowOpacity: 0.3,
                gap: 20,
                overflow: "hidden",
                marginTop: 50,
                padding: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontFamily: "Poppins-Bold", fontSize: 30 }}>
                VIDEO EDUKASI
              </Text>
              <Box
                button={true}
                width={355}
                height={60}
                icon={<Entypo name="folder-video" size={40} color="#1AA7EC" />}
                tittle={"Riwayat Sikat Gigi"}
                fontStyle={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 20,
                  paddingLeft: 20,
                  color: "#1AA7EC",
                }}
              />
              <Box
                button={true}
                width={355}
                height={60}
                icon={<VideoICN style={{ width: 50, heigh: 50 }} />}
                tittle={"Riwayat Sikat Gigi"}
                fontStyle={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 20,
                  paddingLeft: 20,
                  color: "#1AA7EC",
                }}
              />
              <Box
                button={true}
                width={355}
                height={60}
                icon={<Entypo name="folder-video" size={40} color="#1AA7EC" />}
                tittle={"Riwayat Sikat Gigi"}
                fontStyle={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 20,
                  paddingLeft: 20,
                  color: "#1AA7EC",
                }}
              />
              <Box
                button={true}
                width={355}
                height={60}
                icon={<Entypo name="folder-video" size={40} color="#1AA7EC" />}
                tittle={"Riwayat Sikat Gigi"}
                fontStyle={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 20,
                  paddingLeft: 20,
                  color: "#1AA7EC",
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
