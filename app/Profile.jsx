import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
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
    <LinearGradient colors={["#00B4D8", "white"]}>
      <View style={{ height: "100%", marginTop: 45 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            height: "100%",
            alignItems: "center",
            paddingHorizontal: 30,
          }}
        >
          <Animated.View
            entering={FadeInUp}
            style={{
              height: 250,
              width: 250,
              borderRadius: 125,
              overflow: "hidden",
              borderWidth: 20,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "white",
              elevation: 8,
            }}
          >
            <ImageBackground
              source={avatar}
              style={{
                height: 250,
                width: 250,
                resizeMode: "cover",
              }}
            ></ImageBackground>
          </Animated.View>
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
              {user.name} RAMA Dhani
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
        </ScrollView>
      </View>
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
