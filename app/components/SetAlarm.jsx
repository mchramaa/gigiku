import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useState } from "react";
import useAlarm from "../hooks/useAlarm";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";
import BlueButton from "./BlueButton";

const SetAlarm = ({ navigation }) => {
  const { handleSelectedTime, handleInputTag, handleButtonSubmitAlarm } =
    useAlarm(navigation);

  let androidView;
  if (Platform.OS === "ios") {
    androidView = "none";
  } else if (Platform.OS === "android") {
    androidView = "";
  }

  let iosView;
  if (Platform.OS === "ios") {
    iosView = "";
  } else if (Platform.OS === "android") {
    iosView = "none";
  }

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

  const setRepeat = () => {
    navigation.navigate("SetRepeat");
  };

  return (
    <LinearGradient
      colors={["#90e0ef", "#1AA7EC"]}
      style={{ height: "100%", width: "100%", paddingHorizontal: 20 }}
    >
      {Platform.OS === "android" && (
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 100,
              fontFamily: "Poppins-Bold",
              color: "white",
            }}
          >
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </Text>
          <BlueButton buttonName="Ubah Jam" onPress={showTimepicker} />
        </View>
      )}
      <View
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "white",
          justifyContent: "center",
          borderRadius: 15,
          elevation: 5,
          marginTop: 20,
          shadowOpacity: 0.5,
          paddingHorizontal: 10,
          paddingBottom: 20,
          shadowOffset: { height: 2 },
        }}
      >
        <View style={{ height: "auto", width: "100%", margin: 5 }}>
          <SafeAreaView>
            {show && Platform.OS === "android" && (
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
            {Platform.OS === "ios" && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"time"}
                is24Hour={true}
                onChange={onChange}
                display="spinner"
              />
            )}
          </SafeAreaView>
        </View>
        <TextInput
          placeholder="Masukkan Nama Alarm"
          style={{
            height: 50,
            width: "auto",
            borderColor: "#e8e8e8",
            borderBottomWidth: 1,
            paddingHorizontal: 20,
            fontSize: 20,
            fontFamily: "Poppins-Regular",
          }}
          onChangeText={handleInputTag}
        />
        <TouchableOpacity
          style={{
            height: 50,
            width: "auto",
            borderColor: "#e8e8e8",
            borderBottomWidth: 0.5,
            paddingHorizontal: 20,
            justifyContent: "center",
          }}
          onPress={setRepeat}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins-Regular",
              opacity: 0.7,
            }}
          >
            Pengulangan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: "auto",
            borderColor: "#e8e8e8",
            borderBottomWidth: 0.5,
            paddingHorizontal: 20,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins-Regular",
              opacity: 0.7,
            }}
          >
            Ringtone
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleButtonSubmitAlarm}
          style={{ alignItems: "center" }}
        >
          <View
            style={{
              marginTop: 15,
              width: 120,
              height: 45,
              backgroundColor: "#00B4D8",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
              elevation: 3,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
              Simpan
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default SetAlarm;
