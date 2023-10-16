import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import BlueButton from "./components/BlueButton";
import * as SQLite from "expo-sqlite";
import { getTodayString } from "./helpers/getTodayString";
import StepPlayer from "./util/StepPlayer";
import MaskotGuide from "../assets/lottie/MaskotGuide";

export default function PanduanFromNotif() {
  const db = SQLite.openDatabase("gigiku.db");

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
            <BlueButton
              tittle={"Selesai Sikat Gigi"}
              width={300}
              height={50}
              onPress={createReport}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
