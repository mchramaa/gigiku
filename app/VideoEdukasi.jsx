import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text } from "react-native";
import { Video } from "expo-av";
import { ScreenOrientation } from "expo";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

export default function VideoEdukasi() {
  const dataVideo = [
    {
      src: require("../assets/video/Video4.webm"),
      name: "Pentingnya kesehatan gigi anak",
    },
    {
      src: require("../assets/video/Video4.webm"),
      name: "Pengalaman datang ke dokter gigi",
    },
    {
      src: require("../assets/video/Video4.webm"),
      name: "Mitos atau fakta pada gigi anak",
    },
    {
      src: require("../assets/video/VideoEdu4.mp4"),
      name: "Kapan anak harus ke dokter gigi",
    },
  ];

  const video = React.useRef(null);
  const secondVideo = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const handleFullscreenUpdate = async ({ fullscreenUpdate }) => {
    if (fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE
      );
    } else if (
      fullscreenUpdate === Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS
    ) {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }
  };

  return (
    <LinearGradient colors={["#1AA7EC", "#90e0ef"]}>
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
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                paddingHorizontal: 10,
                backgroundColor: "#1AA7EC",
                color: "white",
                fontSize: 17,
                fontFamily: "Poppins-SemiBold",
                marginBottom: 10,
              }}
            >
              {data.name}
            </Text>
            <Video
              ref={video}
              style={{ height: 210, width: "100%" }}
              source={data.src}
              useNativeControls
              resizeMode="contain"
              isLooping
              onPlaybackStatusUpdate={setStatus}
              onFullscreenUpdate={handleFullscreenUpdate}
            />
          </View>
        ))}
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={setStatus}
        />
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
