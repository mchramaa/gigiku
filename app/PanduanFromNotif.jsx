import { Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import * as SQLite from "expo-sqlite";
import { getTodayString } from "./helpers/getTodayString";
import StepPlayer from "./util/StepPlayer";
import MaskotGuide from "../assets/lottie/MaskotGuide";
import ReactNativeModal from "react-native-modal";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function PanduanFromNotif() {
  const navigation = useNavigation();
  const db = SQLite.openDatabase("gigiku.db");
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function createReport() {
    const todayString = getTodayString();
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO reports (created_at) VALUES (?)",
          [`${todayString}`],
          (_, { insertId, rowsAffected }) => {
            if (rowsAffected > 0) {
              console.log(rowsAffected);
              resolve(rowsAffected, insertId);
            } else {
              reject(new Error("Failed to insert user"));
            }
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  }

  const goToHome = () => {
    navigation.navigate("Home");
  };
  const dataStep = [
    {
      src: require("../assets/video/Step1.webm"),
      note: "Tuangkan Pasta gigi pada sikat gigi sebesar biji jagung,  Gerakan sikat gigi pada gigi depan atas bawah dengan tegak lurus sumbu gigi ",
    },
    {
      src: require("../assets/video/Step2.webm"),
      note: "Gerakan sikat gigi pada gigi depan dengan sudut 45 derajat dari sisi merah",
    },
    {
      src: require("../assets/video/Step3.webm"),
      note: "Tuangkan Pasta gigi pada sikat gigi sebesar biji jagung",
    },
    {
      src: require("../assets/video/Step4.webm"),
      note: "Gerakan sikat gigi pada gigi belakang dengan menarik dari depan ke belakang pada permukaan",
    },
    {
      src: require("../assets/video/Step5.webm"),
      note: "Sikat pula lidah secara perlahan",
    },
  ];

  return (
    <LinearGradient colors={["#1AA7EC", "#90e0ef"]}>
      <ScrollView style={{ paddingTop: 30 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
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
          {dataStep.map((data, idx) => (
            <View
              key={idx}
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
                source={data.src}
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
                {data.note}
              </Text>
            </View>
          ))}
          <TouchableOpacity onPress={toggleModal} style={{ height: 80 }}>
            <View
              style={{
                marginTop: 15,
                width: 250,
                height: 50,
                backgroundColor: "#00B4D8",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
                elevation: 3,
              }}
            >
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "white" }}
              >
                Selesai Sikat Gigi
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <ReactNativeModal
          isVisible={isModalVisible}
          animationIn={"fadeIn"}
          animationOut={"fadeOut"}
        >
          <View
            style={{
              height: 200,
              backgroundColor: "white",
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Apakah kamu sudah selesai menyikat gigi ??
            </Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <TouchableOpacity onPress={toggleModal} style={{ height: 80 }}>
                <View
                  style={{
                    marginTop: 15,
                    width: 100,
                    height: 50,
                    backgroundColor: "#00B4D8",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 50,
                    elevation: 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-Bold",
                      fontSize: 20,
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Belum
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={createReport && toggleModal && goToHome}
                style={{ height: 80 }}
              >
                <View
                  style={{
                    marginTop: 15,
                    width: 100,
                    height: 50,
                    backgroundColor: "#00B4D8",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 50,
                    elevation: 3,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Poppins-Bold",
                      fontSize: 20,
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Selesai
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ReactNativeModal>
      </ScrollView>
    </LinearGradient>
  );
}
