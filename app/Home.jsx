import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "./hooks/useAuth.zustand";
import Boxx from "./components/Boxx";
import CalendarIconSVG from "../assets/icon/CalendarIconSVG";
import MaskotHome from "../assets/lottie/MaskotHome";
import VidEduIcon from "../assets/lottie/VideoEducation";

export default function Home() {
  const { user } = useAuth();
  const quoteStart = ["GEMAS"];
  const quoteEnd = ["Gigi Sehat Menuju Masa Depan Cerah"];

  const navigation = useNavigation();
  const ProfileButton = () => {
    navigation.navigate("Profile");
  };
  const RiwayatGigi = () => {
    navigation.navigate("Alarm");
  };
  const VideoEdukasiBtn = () => {
    navigation.navigate("VideoEdukasi");
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

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                backgroundColor: "white",
                borderRadius: 15,
                elevation: 5,
                shadowRadius: 3.84,
                shadowOffset: { height: 4 },
                shadowOpacity: 0.3,
                gap: 20,
                overflow: "hidden",
                padding: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Boxx
                button={true}
                onPress={RiwayatGigi}
                width={"100%"}
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

              <Boxx
                button={true}
                onPress={VideoEdukasiBtn}
                width={"100%"}
                height={100}
                icon={<VidEduIcon style={{ width: 100, height: 100 }} />}
                tittle={"Video Edukasi"}
                fontStyle={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 23,
                  paddingLeft: 20,
                  paddingRight: 45,
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
