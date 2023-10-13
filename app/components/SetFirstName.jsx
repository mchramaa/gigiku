import { Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import TabSetName from "./TabSetName";
import LotHello from "../../assets/lottie/Hello";
import MaskotHello from "../../assets/lottie/MaskotHello";
import { useState } from "react";
import * as SQLite from "expo-sqlite";
import { useAuth } from "../hooks/useAuth.zustand";

export default function SetFirstName({ navigation }) {
  const db = SQLite.openDatabase("gigiku.db");

  const { setUser } = useAuth();
  const [name, setName] = useState("");

  function createUser() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          `INSERT INTO users (name) values (?)`,
          [name],
          (_, { insertId, rowsAffected }) => {
            resolve({ insertId: insertId, rowsAffected: rowsAffected });
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  }

  function saveNameBTN() {
    createUser()
      .then((res) => {
        if (res.rowsAffected === 1) {
          setUser({ id: res.insertId, name: name });
          navigation.navigate("Tabs");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleInputName(value) {
    setName(value);
  }
  return (
    <LinearGradient colors={["#90e0ef", "#1AA7EC"]}>
      <View style={{ height: "100%" }}>
        <View
          style={{
            marginTop: Constants.statusBarHeight,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              // justifyContent: "center",
              alignItems: "center",
              elevation: 10,
            }}
          >
            <LotHello />
            <MaskotHello />
            <View
              style={{
                height: 200,
                width: "100%",
                backgroundColor: "white",
                borderRadius: 15,
                padding: 30,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ textAlign: "center", color: "grey", marginBottom: 5 }}
              >
                Silahkan Masukkan Nama Kamu
              </Text>
              <TabSetName
                buttonName="Simpan"
                handleInputName={handleInputName}
                onPress={saveNameBTN}
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
