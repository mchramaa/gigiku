import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Video } from "expo-av";
import React, { useEffect } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import * as ScreenOrientation from "expo-screen-orientation";

export default function VideoEdukasi() {
  const dataVideo = [
    {
      src: require("../assets/video/Video1.mp4"),
      name: "Pentingnya Menjaga Kesehatan Gigi Anak",
    },
    {
      src: require("../assets/video/Video2.mp4"),
      name: "Persepsi Orang Awam Dan Anak Tentang Pergi Ke Dokter Gigi",
    },
    {
      src: require("../assets/video/Video3.mp4"),
      name: "Mitos Atau Fakta Pada Gigi Anak",
    },
    {
      src: require("../assets/video/Video4.mp4"),
      name: "Kapan Anak Harus Ke Dokter Gigi",
    },
  ];

  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});

  function setOrientation() {
    if (Dimensions.get("window").height > Dimensions.get("window").width) {
      //Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      //Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }
  return (
    <LinearGradient colors={["#ffffff", "#ffffff"]}>
      <ScrollView style={{ height: "100%", paddingHorizontal: 20 }}>
        {dataVideo.map((data, idx) => (
          <View
            key={idx}
            style={{
              width: "100%",
              backgroundColor: "white",
              elevation: 3,
              overflow: "hidden",
              borderRadius: 15,
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: "#1AA7EC",
                color: "white",
                fontSize: 17,
                textAlign: "center",
                fontFamily: "Poppins-SemiBold",
              }}
            >
              {data.name}
            </Text>
            <Video
              ref={video}
              style={{ height: 220, width: "100%" }}
              source={data.src}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={setStatus}
              onFullscreenUpdate={setOrientation}
            />
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: 200,
    alignSelf: "stretch",
  },
  buttons: {
    margin: 16,
  },
});
