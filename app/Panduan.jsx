import { Image, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import BlueButton from "./components/BlueButton";
import * as SQLite from "expo-sqlite";
import { getTodayString } from "./helpers/getTodayString";
import MaskotYeay from "../assets/lottie/MaskotYeay";
import Step1 from "../assets/lottie/Step1";

export default function Panduan() {
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
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/lottie/step1.gif")}
                style={{ width: 300, height: 300, marginLeft: 60 }}
              />
            </View>
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/lottie/step1.gif")}
                style={{ width: 300, height: 300, marginLeft: 60 }}
              />
            </View>
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/lottie/step1.gif")}
                style={{ width: 300, height: 300, marginLeft: 60 }}
              />
            </View>
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/lottie/step1.gif")}
                style={{ width: 300, height: 300, marginLeft: 60 }}
              />
            </View>
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/lottie/step1.gif")}
                style={{ width: 300, height: 300, marginLeft: 60 }}
              />
            </View>
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/lottie/step1.gif")}
                style={{ width: 300, height: 300, marginLeft: 60 }}
              />
            </View>
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/lottie/step1.gif")}
                style={{ width: 300, height: 300, marginLeft: 60 }}
              />
            </View>
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/lottie/step1.gif")}
                style={{ width: 300, height: 300, marginLeft: 60 }}
              />
            </View>
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/lottie/step1.gif")}
                style={{ width: 300, height: 300, marginLeft: 60 }}
              />
            </View>
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/lottie/step1.gif")}
                style={{ width: 300, height: 300, marginLeft: 60 }}
              />
            </View>
            <View
              style={{
                width: 300,
                height: 300,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Image
                source={require("../assets/lottie/step1.gif")}
                style={{ width: 300, height: 300, marginLeft: 60 }}
              />
            </View>

            <Step1
              style={{
                height: 140,
              }}
            />

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
