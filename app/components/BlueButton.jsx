import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BlueButton(props) {
  let { onPress, buttonName } = props;
  return (
    <TouchableOpacity onPress={onPress}>
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
          {buttonName}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
