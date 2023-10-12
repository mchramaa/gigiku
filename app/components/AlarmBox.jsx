import { View, Text } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AlarmBox({ tittle }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: "white",
        height: "auto",
        padding: 10,
        borderRadius: 15,
        elevation: 10,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          is24Hour={true}
          onChange={onChange}
          display="spinner"
          onTouchCancel={() => setShow(false)}
        />
      )}
      <View
        style={{
          justifyContent: "center",
        }}
      >
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}>
          {tittle}
        </Text>
        <Text
          style={{
            fontSize: 40,
            fontFamily: "Poppins-Bold",
            color: "#1AA7EC",
            marginBottom: -15,
            marginTop: -10,
          }}
        >
          {date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })}
        </Text>
        <View style={{ flexDirection: "row" }}></View>
      </View>
      <TouchableOpacity
        onPress={showTimepicker}
        style={{
          backgroundColor: "#1AA7EC",
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 25,
            color: "white",
          }}
        >
          Edit Jam
        </Text>
      </TouchableOpacity>
    </View>
  );
}
