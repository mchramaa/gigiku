import { View, Text, Linking } from "react-native";
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
import { TouchableOpacity } from "react-native-gesture-handler";

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

  //Disabel Claim Certificate
  let certiBtnDisable = false;
  //link Claim Certi
  function linkCertiBtn() {
    const url = "https://forms.gle/9mJFJ88GjN6CJvde6";
    Linking.openURL(url);
    console.log("Claim");
  }

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
      <Calendar
        markedDates={riwayatSikatGigi}
        theme={{
          dotStyle: DotStyle,
          todayTextColor: "black",
          todayBackgroundColor: "#e3f5fc",
        }}
        style={{ borderBottomWidth: 0.7, borderBottomColor: "#d9d9d9" }}
      />

      {/* Keterangan */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 7,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              height: 14,
              width: 14,
              backgroundColor: "pink",
              borderRadius: 7,
            }}
          ></View>
          <Text>Sikat Gigi sekali</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              height: 14,
              width: 14,
              backgroundColor: "#1AA7EC",
              borderRadius: 7,
            }}
          ></View>
          <Text>Sikat Gigi dua kali</Text>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          disabled={certiBtnDisable}
          onPress={linkCertiBtn}
          style={{
            backgroundColor: `${
              certiBtnDisable === true ? "#dcddde" : "#1AA7EC"
            }`,
            paddingVertical: 4,
            borderRadius: 100,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins-Bold",
              fontSize: 25,
              color: "white",
            }}
          >
            Klaim Sertifikat
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 10.5, textAlign: "center", marginTop: 1 }}>
          <Text style={{ color: "red" }}>*</Text>
          Sikat Gigi sehari 2x selama 14 hari berturut-turut untuk klaim
          sertifikat
        </Text>
      </View>
    </View>
  );
}
