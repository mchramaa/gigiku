import { View, Text } from "react-native";
import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import CalendarIconSVG from "../../assets/icon/CalendarIconSVG";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ],
  dayNames: ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"],
  dayNamesShort: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Ming"],
  today: "Hari ini",
};

LocaleConfig.defaultLocale = "fr";

export default function AppCalendar() {
  let dataSikatGigi = [{ date: "2023-10-10", status: 0 }];
  let riwayatSikatGigi = {
    "2023-10-10": {
      marked: true,
      dotColor: "pink",
    },
    "2023-10-11": {
      marked: true,
      dotColor: "#1AA7EC",
    },
  };

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
