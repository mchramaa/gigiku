import { Text } from "react-native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import TabSetName from "./TabSetName";
import LotHello from "../../assets/lottie/Hello";
import { useNavigation } from "@react-navigation/native";
import MaskotHello from "../../assets/lottie/MaskotHello";

export default function SetFirstName() {
  const navigation = useNavigation();
  const saveNameBTN = () => {
    navigation.navigate("Home");
    updateUser(name);
  };

  function handleInputName(value) {
    setName(value);
  }
  return (
    <LinearGradient colors={["#90e0ef", "#1AA7EC"]}>
      <View style={{ height: "100%" }}>
        <View
          style={{
            marginTop: Constants.statusBarHeight,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              // justifyContent: "center",
              alignItems: "center",
              elevation: 10,
            }}
          >
            <LotHello />
            <MaskotHello />
            <View
              style={{
                height: 200,
                width: "100%",
                backgroundColor: "white",
                borderRadius: 15,
                padding: 30,
                justifyContent: "center",
              }}
            >
              <Text
                style={{ textAlign: "center", color: "grey", marginBottom: 5 }}
              >
                Silahkan Masukkan Nama Kamu
              </Text>
              <TabSetName
                buttonName="Simpan"
                handleInputName={handleInputName}
                onPress={saveNameBTN}
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
