import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function GridBoxRow({
  tittle,
  icon,
  onPress,
  width,
  height,
  fontStyle,
}) {
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
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <View style={{ height: 100, width: 120 }}>{icon}</View>
      <Text style={{ ...fontStyle }}>{tittle}</Text>
    </TouchableOpacity>
  );
}
