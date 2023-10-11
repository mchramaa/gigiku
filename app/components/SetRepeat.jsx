import { Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import ExpoCheckbox from "expo-checkbox/build/ExpoCheckbox";

export default function SetRepeat() {
  const [checkboxes, setCheckboxes] = useState([
    { day: "Minggu", checked: false },
    { day: "Senin", checked: false },
    { day: "Selasa", checked: false },
    { day: "Rabu", checked: false },
    { day: "Kamis", checked: false },
    { day: "Jumat", checked: false },
    { day: "Sabtu", checked: false },
  ]);

  const handleCheckboxPress = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    setCheckboxes(updatedCheckboxes);
    console.log(updatedCheckboxes);
  };

  return (
    <LinearGradient
      colors={["#90e0ef", "#1AA7EC"]}
      style={{ height: "100%", padding: 10 }}
    >
      <View
        style={{
          gap: 15,
          backgroundColor: "white",
          padding: 15,
          borderRadius: 15,
        }}
      >
        {checkboxes.map((checkbox, idx) => (
          <TouchableOpacity
            onPress={() => handleCheckboxPress(idx)}
            key={idx}
            style={{
              height: 50,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 4,
              borderBottomWidth: 0.6,
              borderBottomColor: "#e8e8e8",
            }}
          >
            <Text style={{ fontFamily: "Poppins-Regular", fontSize: 20 }}>
              Setiap {checkbox.day}
            </Text>
            <ExpoCheckbox
              value={checkbox.checked}
              style={{ borderRadius: 50 }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
}
