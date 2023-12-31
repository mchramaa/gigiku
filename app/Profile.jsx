import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import BlueButton from "./components/BlueButton";
import TabSetName from "./components/TabSetName";
import * as SQLite from "expo-sqlite";
import { useAuth } from "./hooks/useAuth.zustand";
import MaskotHello from "../assets/lottie/MaskotHello";
import LotHello from "../assets/lottie/LotHello";

export default function Profile() {
  /**
   * initialization
   */
  const db = SQLite.openDatabase("gigiku.db");
  const avatar = require("../assets/avatar.png");
  const translateY = useSharedValue(0);
  /** */

  /**
   * STATE
   */
  const { user, setUser } = useAuth();
  const [name, setName] = useState(user.name);
  /** */

  /**
   * DB QUERY
   */

  function updateUser(nameParams) {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE users SET name = ? WHERE id = ?",
        [name, user.id],
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) {
            setUser({ id: user.id, name: nameParams });
          } else {
            reject(new Error("User not found"));
          }
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  }
  /** */

  /**
   * Handle
   */
  const animSetName = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value) }],
  }));

  const changeNameBTN = () => {
    translateY.value += -200;
  };
  const saveNameBTN = () => {
    translateY.value += 200;
    updateUser(name);
  };

  function handleInputName(value) {
    setName(value);
  }

  return (
    <LinearGradient colors={["#00B4D8", "white"]} style={{ width: "100%" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 30,
          height: "100%",
        }}
      >
        <LotHello
          style={{
            width: 200,
            height: 200,
            marginBottom: -90,
            marginTop: -20,
          }}
        />
        <MaskotHello />
        <View
          style={{
            width: "100%",
            height: 200,
            marginTop: 30,
            backgroundColor: "white",
            borderRadius: 15,
            elevation: 8,
            paddingHorizontal: 30,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 20,
              color: "#00B4D8",
            }}
          >
            Nama :
          </Text>
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 25 }}>
            {user.name}
          </Text>
          <BlueButton
            tittle="Ubah"
            onPress={changeNameBTN}
            width={100}
            height={45}
          />
          <Animated.View style={[styles.boxSetName, animSetName]}>
            <TabSetName
              onPress={saveNameBTN}
              buttonName="Simpan"
              handleInputName={handleInputName}
            />
          </Animated.View>
        </View>
        <View
          style={{ position: "absolute", bottom: 20, alignItems: "center" }}
        >
          <Image
            source={require("../assets/icon/iconLogo.png")}
            style={{
              width: 200,
              height: 100,
            }}
          />
          <Text>V.01.0</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  boxSetName: {
    position: "absolute",
    backgroundColor: "white",
    padding: 45,
    bottom: -200,
  },
  hidden: {
    display: "none",
  },
});
