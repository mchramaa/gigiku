import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import TimePicker from "./components/TimePicker";
import useAlarm from "./hooks/useAlarm";

const SetAlarm = ({ navigation }) => {
  const { handleSelectedTime, handleInputTag, handleButtonSubmitAlarm } =
    useAlarm(navigation);

  return (
    <View>
      <TimePicker handleSelectedTime={handleSelectedTime} />
      <TextInput
        placeholder="Masukkan Tag"
        style={{
          height: 50,
          width: 250,
          borderRadius: 10,
          borderColor: "#00B4D8",
          borderWidth: 2,
          paddingHorizontal: 20,
          fontSize: 20,
        }}
        onChangeText={handleInputTag}
      />
      <TouchableOpacity onPress={handleButtonSubmitAlarm}>
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
  );
};

export default SetAlarm;
