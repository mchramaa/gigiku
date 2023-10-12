import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Box({
  button,
  tittle,
  icon,
  onPress,
  width,
  height,
  justifyContent,
  fontStyle,
  iconStyle,
}) {
  if (button == true)
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: "row",
          width: width,
          height: height,
          backgroundColor: "white",
          elevation: 3,
          shadowOpacity: 0.2,
          shadowOffset: { height: 1 },
          borderRadius: 10,
          justifyContent: justifyContent,
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ ...iconStyle }}>{icon}</View>
        <Text style={{ ...fontStyle }}>{tittle}</Text>
      </TouchableOpacity>
    );
  else
    return (
      <View
        style={{
          flexDirection: "row",
          width: width,
          height: height,
          backgroundColor: "white",
          elevation: 3,
          shadowOpacity: 0.2,
          shadowOffset: { height: 1 },
          borderRadius: 10,
          justifyContent: justifyContent,
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ ...iconStyle }}>{icon}</View>
        <Text style={{ ...fontStyle }}>{tittle}</Text>
      </View>
    );
}
