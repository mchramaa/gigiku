import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function GridBoxCol({
  tittle,
  icon,
  onPress,
  width,
  height,
  fontStyle,
  iconStyle,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: width,
        height: height,
        backgroundColor: "white",
        elevation: 3,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <View style={{ ...iconStyle }}>{icon}</View>
      <Text
        style={{
          ...fontStyle,
          fontFamily: "Poppins-SemiBold",
          color: "#1AA7EC",
        }}
      >
        {tittle}
      </Text>
    </TouchableOpacity>
  );
}
