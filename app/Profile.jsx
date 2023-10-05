import React from "react";
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

export default function Profile() {
  const avatar = require("../assets/avatar.png");

  const translateY = useSharedValue(0);

  const animSetName = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateY.value) }],
  }));

  const changeNameBTN = () => {
    console.log("ubah");
    translateY.value += -200;
  };
  const saveNameBTN = () => {
    console.log("save");
    translateY.value += 200;
  };

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
            <Text>Nama :</Text>
            <Text>User</Text>
            <BlueButton buttonName="Ubah" onPress={changeNameBTN} />
            <Animated.View style={[styles.boxSetName, animSetName]}>
              <TabSetName onPress={saveNameBTN} buttonName="Simpan" />
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
});
