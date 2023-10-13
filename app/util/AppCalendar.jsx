import { View, Text } from "react-native";
import React, { useCallback, useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import CalendarIconSVG from "../../assets/icon/CalendarIconSVG";
import * as SQLite from "expo-sqlite";
import {
  dayNames,
  dayNamesShort,
  monthNames,
  today,
} from "../constants/calender-config";
import { useFocusEffect } from "@react-navigation/native";

LocaleConfig.locales["fr"] = {
  monthNames: monthNames,
  dayNames: dayNames,
  dayNamesShort: dayNamesShort,
  today: today,
};

LocaleConfig.defaultLocale = "fr";

export default function AppCalendar() {
  const db = SQLite.openDatabase("gigiku.db");

  const [dataSikatGigi, setdataSikatGigi] = useState([]);

  function getReports() {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT created_at AS date, COUNT(*) as status FROM reports GROUP BY created_at",
          [],
          (tx, { rows }) => {
            const reportRows = rows._array;
            resolve(reportRows);
          },
          (tx, error) => {
            reject(error);
          }
        );
      });
    });
  }

  useFocusEffect(
    useCallback(() => {
      getReports()
        .then((res) => setdataSikatGigi(res))
        .catch((err) => console.log(err));
    }, [])
  );

  const riwayatSikatGigiArray = [];

  dataSikatGigi.forEach((data) => {
    riwayatSikatGigiArray.push(
      Object.assign({
        [data.date]: {
          marked: data.status === 0 ? false : true,
          dotColor: `${data.status === 1 ? "pink" : "#1AA7EC"}`,
        },
      })
    );
  });
  const riwayatSikatGigi = {};
  riwayatSikatGigiArray.forEach((item) => {
    for (const date in item) {
      if (item.hasOwnProperty(date)) {
        riwayatSikatGigi[date] = item[date];
      }
    }
  });

  const DotStyle = {
    width: 30,
    height: 30,
    marginTop: -25,
    borderRadius: 15,
    zIndex: -10,
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 15,
        borderRadius: 15,
        marginTop: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ height: 50, width: 75 }}>
          <CalendarIconSVG />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "Poppins-SemiBold",
            paddingLeft: 20,
            fontSize: 25,
            color: "#1AA7EC",
          }}
        >
          Riwayat Sikat Gigi
        </Text>
      </View>
      <Calendar markedDates={riwayatSikatGigi} theme={{ dotStyle: DotStyle }} />
    </View>
  );
}
