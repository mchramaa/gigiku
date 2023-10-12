import { Image, Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import GigiMaskotSVG from "../assets/icon/GigiMaskotSVG";
import { useAuth } from "./hooks/useAuth.zustand";
import CalendarIconSVG from "../assets/icon/CalendarIconSVG";
import GridBoxRow from "./components/GridBoxRow";
import GridBoxCol from "./components/GridBoxCol";
import { Entypo } from "@expo/vector-icons";
import MaskotHome from "../assets/lottie/MaskotHome";

export default function Home() {
  const { user } = useAuth();
  const quoteStart = ["GEMAS"];
  const quoteEnd = ["Gigi sehat menuju masa Depan Cerah"];

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
                marginTop: 100,
              }}
            >
              {/* <MaskotHome /> */}
              <Image
                source={require("../assets/lottie/TeethHello.gif")}
                style={{
                  height: 300,
                  width: 300,
                  marginLeft: 20,
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
                elevation: 10,
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
              <GridBoxRow
                width={355}
                height={100}
                icon={<CalendarIconSVG />}
                tittle={"Riwayat Sikat Gigi"}
                fontStyle={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 20,
                  paddingLeft: 20,
                  color: "#1AA7EC",
                }}
              />
              <GridBoxCol
                width={100}
                height={100}
                icon={<Entypo name="folder-video" size={50} color="#1AA7EC" />}
                tittle={"Video1"}
              />
              <GridBoxCol
                width={100}
                height={100}
                icon={<Entypo name="folder-video" size={50} color="#1AA7EC" />}
                tittle={"Video2"}
              />
              <GridBoxCol
                width={100}
                height={100}
                icon={<Entypo name="folder-video" size={50} color="#1AA7EC" />}
                tittle={"Video3"}
              />
            </View>
            <TouchableOpacity onPress={setFirstName}>
              <View
                style={{
                  height: 50,
                  width: "100%",
                  backgroundColor: "blue",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>Set First Name</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={EditAlarm}>
              <View
                style={{
                  height: 50,
                  width: "100%",
                  backgroundColor: "blue",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white" }}>PAGE EDIT ALARM</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
