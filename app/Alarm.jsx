import { View, Text } from "react-native";
import React, { useRef, useState, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import useAlarm from "./hooks/useAlarm";
import AlarmBox from "./components/AlarmBox";
import AppCalendar from "./util/AppCalendar";
import { ScrollView } from "react-native-gesture-handler";
import MaskotYeay from "../assets/lottie/MaskotYeay";

import * as Notifications from "expo-notifications";
import storage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";
import { ltrimFirstZero } from "./helpers/ltrimZero";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function Alarm({ navigation }) {
  const db = SQLite.openDatabase("gigiku.db");
  const { alarmData } = useAlarm();
  const textUp = ["Jangan Lupa !!"];
  const textDown = ["Pasang alarm sikat gigi ya...."];

  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  function getAlarmData() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM alarms",
          [],
          (_, { rows }) => {
            const alarmRows = rows._array;
            resolve(alarmRows);
          },
          (error) => {
            reject(error);
          }
        );
      });
    });
  }

  const initNotification = async (data) => {
    await Notifications.scheduleNotificationAsync({
      identifier: "pagi",
      content: {
        title: `${data.title}`,
        body: `${data.body}`,
        data: { data: "data goes here" },
      },
      trigger: {
        hour: data.hour,
        minute: data.minute,
        repeats: true,
      },
    });
  };

  const getPermission = async () => {
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Enable push notifications to use the app!");
        await storage.setItem("expopushtoken", "");
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      await storage.setItem("expopushtoken", token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  };
  const SetAlarm = () => {
    navigation.navigate("SetAlarm");
  };

  useFocusEffect(
    useCallback(() => {
      getAlarmData()
        .then((res) => {
          res.forEach((element) => {
            // Notifications.cancelScheduledNotificationAsync(`${element.tag}`);
            initNotification({
              title: `${element.tag}`,
              body: `Alarm ${element.tag}`,
              hour: Number(ltrimFirstZero(`${element.hours}`)),
              minute: Number(ltrimFirstZero(`${element.minute}`)),
              identifier: `${element.tag}`,
            });
            console.log(Number(ltrimFirstZero(`${element.hours}`)));
            console.log(Number(ltrimFirstZero(`${element.minute}`)));
          });
        })
        .catch((err) => console.log(err));
      getPermission();

      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });

      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          if (response.actionIdentifier == "default") {
            navigation.navigate("PanduanFromNotif");
          }
        });

      return () => {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, [])
  );

  return (
    <LinearGradient colors={["#1AA7EC", "#90e0ef"]} style={{ height: "100%" }}>
      <ScrollView
        style={{
          marginTop: Constants.statusBarHeight,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            marginHorizontal: 20,
          }}
        >
          <MaskotYeay
            style={{
              height: 140,
              marginTop: -10,
              marginBottom: -20,
            }}
          />
          <Text
            style={{
              fontSize: 27,
              color: "white",
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {textUp}
            {"\n"}
            <Text style={{ fontSize: 18 }}>{textDown}</Text>
          </Text>
        </View>

        <View style={{ marginBottom: 200 }}>
          {alarmData.map((data, key) => (
            <AlarmBox
              tittle={data.tag}
              key={key}
              alarmData={data}
              initNotification={initNotification}
              notifications={Notifications}
            />
          ))}

          <AppCalendar />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
